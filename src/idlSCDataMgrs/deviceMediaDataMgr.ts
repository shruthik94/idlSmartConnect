import { Injectable } from "@angular/core";
import {DeviceMediaWSMgr} from "../idlSCWebServiceMgrs/deviceMediaWSMgr";

@Injectable()
export class DeviceMediaDataMgr {

    /**
     * Default class constructor
     * @param deviceMediaWSMgr  
     */
    constructor(private deviceMediaWSMgr: DeviceMediaWSMgr) {
       
    }

    /**
     * Method to get media 
     */
    uploadDeviceMedia(deviceMediaData) {
        return new Promise((resolve, reject) => {
            this.deviceMediaWSMgr.uploadDeviceMedia(deviceMediaData).then(response => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}