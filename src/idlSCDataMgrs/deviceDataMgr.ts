import { Injectable } from "@angular/core";
import { DeviceWSMgr } from '../idlSCWebServiceMgrs/deviceWSMgr';

@Injectable()
export class DeviceDataMgr {

    /**
     * Default class constructor 
     */
    constructor(private deviceWSMgr: DeviceWSMgr) {

    }

    /**
    * Method to get devices 
    */
        getDevice() {
            return new Promise((resolve, reject) => {
                this.deviceWSMgr.getDevice().then(response => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                })
            })
        }
}