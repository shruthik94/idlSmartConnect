/* @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version :
 * @Created by : Shruthi K
 * @creationDate : 01-Apr-2019
 * @changeHistory :
 * @desc : Class to handle user sqlite database operations
 * date                Modified By                      Description
 *          
*/

import { IDLBaseDbMgr } from "../idlSCDbMgrs/idlSCBaseDbMgr";
import { Injectable } from "@angular/core";
import * as database from '../idlSCHelpers/idlSCDbConfig';
import { User } from "../idlSCModels/User";
import * as consts from '../idlSCHelpers/idlSCConstants';

@Injectable()
export class IDLUserDBMgr {

    baseDbMgr: IDLBaseDbMgr;

    constructor(private idlBaseDbMgr: IDLBaseDbMgr) {
        this.baseDbMgr = new IDLBaseDbMgr();
    }

    /**
     * add user to database
     * @param user user model object to store database
     */
    addUser(user: User) {
        return new Promise((resolve, reject) => {
            this.deleteUserByEmail(user.email).then((status) => {
                this.baseDbMgr.executeSqlCallback(database.idlSCUserQuery.insertUser, [user.id, user.userName, user.email, user.password]).then((res) => {
                    resolve(true);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            })
        })
    }

    /**
     * Delete all users from database
     */
    deleteUser() {
        return new Promise((resolve, reject) => {
            this.baseDbMgr.executeSqlCallback(database.idlSCUserQuery.deleteUsers, []).then((res) => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * Delete user by email from database
     */
    deleteUserByEmail(email) {
        return new Promise((resolve, reject) => {
            this.baseDbMgr.executeSqlCallback(database.idlSCUserQuery.deleteUserByEmail, [email]).then((res) => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * get user by id
     * @param id unique id to get user from database
     */
    getUserById(id) {
        return new Promise((resolve, reject) => {
            this.baseDbMgr.executeSqlCallback(database.idlSCUserQuery.getUserById, [id]).then((res: any) => {
                if ((res.rows !== undefined) && (res.rows !== null)) {
                    this.getUserObject(res.rows.item(0)).then((user) => {
                        resolve(user);
                    })
                }else if((res !== undefined) && (res[0] !== undefined)){
                    this.getUserObject(res[0]).then((user) => {
                        resolve(user);
                    })
                }else {
                    var error = {}
                    error[consts.response.message] = consts.errorMessages.unableToGetUserData
                    reject(error)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }

    /**
     * Get idl user object from the database response
     * @param obj database result object
     */
    private getUserObject(obj) {
        return new Promise((resolve, reject) => {

            var user = new User();
            user.id = obj.ISCU_id
            user.userName = obj.ISCU_name
            user.email = obj.ISCU_email
            user.password = obj.ISCU_password
            resolve(user);
        })
    }
}