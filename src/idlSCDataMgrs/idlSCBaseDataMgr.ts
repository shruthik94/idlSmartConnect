/* @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version :
 * @Created by : Shruthi
 * @creationDate : 09-Apr-2019
 * @changeHistory :
 * @desc : Class to handle the sqlite database operations
 * date                Modified By                      Description
 * 
*/
import { Injectable } from '@angular/core';
import { count } from 'rxjs/operators';

@Injectable()
export class IDLSCBaseDataMgr {

    count: any;
    constructor() {
        this.init()
    }

    /**
     * Intialize Data Mgr
     */
    init() {
        
    }

    /**
     * check and update the data to the loccal database
     */
    checkAndUpdateLocalDatabase() {
        return new Promise((resolve, reject) => {
            this.isDataAvailable().then((status) => {
                if (!status) {
                    this.getDataFromWS().then((data) => {
                        
                    }).catch((err) => {
                        
                    })
                } else {
                    this.getModifiedDataFromWS().then((data) => {
                        
                    }).catch((err) => {
                        
                    })
                }
            }).catch((err) => {

            });
        })
    }

    /**
     * get the data from the ws manager for specic module 
     */
    getDataFromWS() {
        return new Promise((resolve, reject) => {
            
        })
    }

    /**
     * get updated data from the ws manager for specic module 
     */
    getModifiedDataFromWS() {
        return new Promise((resolve, reject) => {
            
        })
    }

    /**
     * check the data in local database before get new
     */
    isDataAvailable() {
        return new Promise((resolve, reject) => {
            
        })
    }

}