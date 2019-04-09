/**
 * @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version : 1.0
 * @Created by : Shruthi K
 * @creationDate : 29-March-2019
 * @superClass :
 * @interfaces : no interface
 * @changeHistory :
 * Date                    Modified by                     Description
 * @desc : This is user data manager
 */

import { Injectable } from "@angular/core";
import { User } from "../idlSCModels/User";
import * as consts from '../idlSCHelpers/idlSCConstants';
import { UserWSMgr } from '../idlSCWebServiceMgrs/userWSMgr';
import { IDLUserDBMgr } from "../idlSCDbMgrs/idlSCUserDbMgr";

@Injectable()
export class IDLUserDataMgr {

    /**
     * Default class constructor
     * 
     * @param userWebServiceMgr 
     * @param idlUserDbMgr 
     */
    constructor(private userWSMgr: UserWSMgr, private idlUserDBMgr: IDLUserDBMgr) {

    }

    /**
     * Method to login to the application
     * @param data data contains the user credentials to login the application
     */
    loginUser(data) {
        return new Promise((resolve, reject) => {
            this.userWSMgr.userLogin(data).then(response => {
                if (response) {
                    this.getUserObjectFromResponse(response).then((userData: User) => {
                        this.idlUserDBMgr.addUser(userData).then((status) => {
                            if (status) {
                                //store token and user id as global variables
                                //window.localStorage.setItem(consts.token.user, consts.token.bearer + response[consts.response.token])
                                window.localStorage.setItem(consts.globalVariables.userId, userData.id)
                                resolve(userData)
                            }
                        }).catch((error) => {
                            reject(error);
                        })
                    }).catch((error) => {
                        reject(error);
                    })
                } else {
                    var error = {}
                    error[consts.response.message] = consts.errorMessages.idlUserLogin
                    reject(error);
                }
            }).catch(error => {
                reject(error);
            });
        });
    }

    /**
     * Get the user data from the response
     * @param response 
     */
    private getUserObjectFromResponse(response) {
        return new Promise((resolve, reject) => {
            if (response) {
                var user = new User();
                user.id = response.content.ISCU_id
                user.userName = response.content.ISCU_name
                user.password = response.content.ISCU_password
                user.email = response.content.ISCU_email
                resolve(user);
            } else {
                var error = {}
                error[consts.response.message] = consts.errorMessages.unableToParseResponse
                reject(error);
            }
        })
    }

}