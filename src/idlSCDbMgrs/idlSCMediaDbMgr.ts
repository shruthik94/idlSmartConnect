import { Injectable } from "@angular/core";
import { IDLBaseDbMgr } from "./idlSCBaseDbMgr";
import { Media } from "../idlSCModels/Media";
import * as database from '../idlSCHelpers/idlSCDbConfig';
import * as consts from '../idlSCHelpers/idlSCConstants';

@Injectable()
export class IDLSCMediaDbMgr {

    baseDbMgr: IDLBaseDbMgr;

    constructor(private idlBaseDbMgr: IDLBaseDbMgr) {
        this.baseDbMgr = new IDLBaseDbMgr();
    }

    /**
     * add Media to database
     * @param media model object to store database
     */
    addMedia(media: Media) {
        return new Promise((resolve, reject) => {
            this.deleteMediaById(media.id).then((status) => {
                this.baseDbMgr.executeSqlCallback(database.idlSCMediaQuery.insertMedia, [media.id, media.mediaName, media.mediaUrl, media.uploadTime, media.userId]).then((res) => {
                    alert("addres "+ JSON.stringify(res));
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
     * Delete media by id from database
     */
    deleteMediaById(id) {
        return new Promise((resolve, reject) => {
            this.baseDbMgr.executeSqlCallback(database.idlSCMediaQuery.deleteMedia, [id]).then((res) => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    /**
     * get media by id
     * @param id unique id to get media from database
     */
    getMediaById(id) {
        return new Promise((resolve, reject) => {
            this.baseDbMgr.executeSqlCallback(database.idlSCMediaQuery.getMediaById, [id]).then((res: any) => {
                if ((res.rows !== undefined) && (res.rows !== null)) {
                    this.getMediaObject(res.rows.item(0)).then((media) => {
                        //alert(JSON.stringify(media))
                        resolve(media);
                    })
                }else if((res !== undefined) && (res[0] !== undefined)){
                    this.getMediaObject(res[0]).then((media) => {
                       // alert(JSON.stringify(media))
                        resolve(media);
                    })
                }else {
                    var error = {}
                    error[consts.response.message] = consts.errorMessages.unableToGetMediaData
                    reject(error)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }
    

    /**
     * Get media object from the database response
     * @param obj database result object
     */
    private getMediaObject(obj) {
        return new Promise((resolve, reject) => {

            var media = new Media();
            media.id = obj.ISCM_id
            media.mediaName = obj.ISCM_name
            media.mediaUrl = obj.ISCM_url
            media.uploadTime = obj.ISCM_uploadtime
            media.userId = obj.ISCM_userid
            resolve(media);
        })
    }
}