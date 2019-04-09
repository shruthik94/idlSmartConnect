/**
 * @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version : 1.0
 * @Created by : Shruthi K
 * @creationDate : 01-Apr=2019
 * @superClass :
 * @interfaces : no interface
 * @changeHistory :
 * Date                    Modified by                     Description
 * @desc : This is user web service manager
 */


import { Injectable } from "@angular/core";
import { BaseWSMgr } from "./baseWSMgr";
import * as wsConfig from '../idlSCHelpers/idlWSConfigs';
import * as consts from '../idlSCHelpers/idlSCConstants';

@Injectable()
export class MediaWSMgr {
    /**
     * Default constructor 
     */
    constructor(private baseWSMgr: BaseWSMgr) {

    }

    /**
     * Method to login the user to application
     * @param userData 
     */
    addMedia(mediaData) {

        //build header object
        var headers = {}
        if (window.localStorage.getItem(consts.globalVariables.userId) !== "undefined" || window.localStorage.getItem(consts.globalVariables.userId) !== null) {
            headers[wsConfig.wsHeaders.userId] = window.localStorage.getItem(consts.globalVariables.userId),
                headers[wsConfig.wsHeaders.attachmenttype] = 'file'
        }

        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.media;
        return new Promise((resolve, reject) => {
            this.baseWSMgr.post(baseUrl, headers, mediaData).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err);
            })
        })
    }

    /**
     * Method to login the user to application
     * @param userData 
     */
    getMedia() {
        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.media;

        //build header object
        var headers = {}
        if (window.localStorage.getItem(consts.response.userId) !== "undefined" || window.localStorage.getItem(consts.response.userId) !== null) {
            // headers[wsConfig.wsHeaders.userId] = window.localStorage.getItem(consts.response.userId)
            headers[wsConfig.wsHeaders.userId] = window.localStorage.getItem(consts.globalVariables.userId)
        }

        return new Promise((resolve, reject) => {
            this.baseWSMgr.get(baseUrl, headers).then((response) => {
                // alert(JSON.stringify(response));
                resolve(response)
            }).catch((err) => {
                alert(err);
                reject(err);
            })
        })
    }


    /**
     * Method to get  the device media to application
     * @param mediaData 
     */
    getDeviceMedia(mediaData) {
        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.deviceMedia;

        //build header object
        var headers = {}
        if (window.localStorage.getItem(consts.response.userId) !== "undefined" || window.localStorage.getItem(consts.response.userId) !== null) {
            headers[wsConfig.wsHeaders.mediaId] = window.localStorage.getItem(consts.response.mediaId)
            headers[wsConfig.wsHeaders.userId] = window.localStorage.getItem(consts.globalVariables.userId)
        }

        return new Promise((resolve, reject) => {
            this.baseWSMgr.post(baseUrl, headers, mediaData).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err);
            })
        })
    }

    /**
     * Method to get  the device media to application
     * @param mediaData 
     */
    deleteMedia() {
        let mediaId = window.localStorage.getItem(consts.response.mediaId);
        //build the route url
        var baseUrl = wsConfig.wsConfigs.baseUrl + wsConfig.userWSRoutes.mediaDelete + mediaId;

        return new Promise((resolve, reject) => {
            this.baseWSMgr.delete(baseUrl, "", "").then((response) => {
                console.log(JSON.stringify(response))
                resolve(response)
            }).catch((err) => {
                reject(err);
            })
        })
    }
}