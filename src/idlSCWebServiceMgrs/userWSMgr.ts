/**
 * @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version : 1.0
 * @Created by : Shruthi K
 * @creationDate : 29-March-2019
 * @superClass :
 * @interfaces : no interface
 * @changeHistory :
 * Date                    Modified by                     Description
 * @desc : This is user web service manager
 */

import { Injectable } from "@angular/core";
import * as wsConfig from '../idlSCHelpers/idlWSConfigs';
import * as consts from '../idlSCHelpers/idlSCConstants';
import { BaseWSMgr } from '../idlSCWebServiceMgrs/baseWSMgr';

@Injectable()
export class UserWSMgr {
    /**
     * Default constructor 
     */
    constructor(private baseWSMgr: BaseWSMgr) {

    }

    /**
     * Method to login the user to application
     * @param userData 
     */
    userLogin(userData) {

        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.login;
       return new Promise((resolve, reject) => {
           this.baseWSMgr.post(baseUrl, "", userData).then((response) => {
               resolve(response)
           }).catch((err) => {
               console.log(err);
               reject(err);
           })
       })
    }
}