import { BaseWSMgr } from "./baseWSMgr";
import { Injectable } from "@angular/core";
import * as wsConfig from '../idlSCHelpers/idlWSConfigs';
import * as consts from '../idlSCHelpers/idlSCConstants';

@Injectable()
export class DeviceWSMgr {
    /**
     * Default constructor 
     */
    constructor(private baseWSMgr: BaseWSMgr) {

    }

    /**
     * Method to get the device to application
     */
    getDevice() {

        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.device;

        //build header object
        var headers = {}
        if (window.localStorage.getItem(consts.response.userId) !== "undefined" || window.localStorage.getItem(consts.response.userId) !== null) {
            headers[wsConfig.wsHeaders.userId] = window.localStorage.getItem(consts.globalVariables.userId)
        }

        return new Promise((resolve, reject) => {
            this.baseWSMgr.get(baseUrl, headers).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err);
            })
        })
    }
}