/* @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version :
 * @Created by : Shruthi K
 * @creationDate : 01-Apr-2019
 * @changeHistory :
 * @desc : Class to handle user sqlite database operations
 * date                Modified By                      Description
 *          
*/

import * as database from '../idlSCHelpers/idlSCDbConfig';

declare let window: any; // <--- Declare it like this

declare function require(name: string);
var alasql = require('alasql');

export class IDLBaseDbMgr {

    db;

    constructor() {
        this.init()
    }

    /**
     * Intializae the database connection
     */
    init() {
        if (window.openDatabase === undefined) {

            alasql.promise([
                'CREATE localStorage DATABASE IF NOT EXISTS User_Auth',
                'ATTACH localStorage DATABASE User_Auth',
                'USE User_Auth'
            ]).then(function (res) {
                console.log('Result from last query:', res)
            }).catch(function (reason) {
                console.trace(reason)
            })

            if (database.idlSCTables) {
                for (let key in database.idlSCTables) {
                    alasql(database.idlSCTables[key]);
                }
            }
        } else {
            this.db = (window.cordova.platformId === 'browser') ?
                window.openDatabase(database.dbConfigs.databaseName, database.dbConfigs.databaseVersion, database.dbConfigs.data, 2 * 1024 * 1024) :
                window.sqlitePlugin.openDatabase({ name: database.dbConfigs.databaseName + '.db', location: database.dbConfigs.location });

            if (database.idlSCTables) {
                for (let key in database.idlSCTables) {
                    this.db.transaction(function (tx) {
                        tx.executeSql(database.idlSCTables[key]);
                    }, function (error) {
                        console.log("Failed to create table " + JSON.stringify(error))
                    }, function () {
                        console.log("Successfully table created " + database.idlSCTables[key])
                    });
                }
            }
        }
    }

    /**
     * execute the query for database
     * @param query database query to execute
     * @param data parameters to store data
     */
    executeSqlCallback(query: string, data: any[]) {
        return new Promise((resolve, reject) => {
            if (window.openDatabase !== undefined) {
                this.db.transaction(function (tx) {
                    tx.executeSql(query, data, function (tx, res) {
                        alert("query"+JSON.stringify(res))
                        resolve(res);
                    }, function (tx, error) {
                        reject(error.message);
                    });
                }, function (error) {
                    reject(error);
                }, function () {

                });
            } else {
                var result = alasql(query, data)
                resolve(result);
            }
        })
    }

    /**
     * close the database
     */
    closeDB() {
        return new Promise((resolve, reject) => {
            this.db.close(function () {
                var response = { 'message': 'Successfully Database Closed' }
                resolve(response)
            }, function (error) {
                reject(error)
            });
        })
    }
}