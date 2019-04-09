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
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as wsConfig from '../idlSCHelpers/idlWSConfigs';
import * as consts from '../idlSCHelpers/idlSCConstants';
import { Globalization } from '@ionic-native/globalization/ngx';
import { map } from "rxjs/operators";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BaseWSMgr {

    constructor(private http: HttpClient, private globalization: Globalization) {

    }

    /**
     * method to get data from the server
     * @param route url to get the data from the web server
     * @param headers headers for the web service call
     */
    get(route, headers) {
        return new Promise((resolve, reject) => {
                this.getHeaders(headers).then((httpHeaders: HttpHeaders) => {
                    this.http.get(route, { headers: httpHeaders })
                        .pipe(map(data => {
                            return data;
                        }))
                        .subscribe(res => {
                            console.log(JSON.stringify(res));
                            this.validate(res).then((data) => {
                                resolve(res);
                            }).catch((err) => {
                                reject(err);
                            })
                        }, (err) => {
                            console.log(JSON.stringify(err));
                            reject(err.error);
                        });
                }).catch((err) => {
                    reject(err);
                })            
        })
    }

    /**
     * Method for http post web service
     * @param route url for the web service call
     * @param headers headers for the web service
     * @param body request body
     */
    post(route, headers, body) {
        console.log("inside post");
        return new Promise((resolve, reject) => {
                this.getHeaders(headers).then((httpHeaders: HttpHeaders) => {
                    console.log(JSON.stringify(headers));
                    this.http.post(route, body, { headers: httpHeaders })
                        .pipe(map(data => {
                            return data;
                        })).subscribe(res => {
                            console.log(JSON.stringify(res));
                            this.validate(res).then((data) => {
                                resolve(res);
                            }).catch((err) => {
                                reject(err);
                            })
                        }, (err) => {
                            console.log(JSON.stringify(err));
                            reject(err.error);
                        });
                }).catch((err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                })
        
        })
    }

    /**
     * Method for http put web service
     * @param route url for the web service call
     * @param headers headers for the web service
     * @param body request body
     */
    put(route, headers, body) {
        return new Promise((resolve, reject) => {
                this.getHeaders(headers).then((httpHeaders: HttpHeaders) => {
                    this.http.put(route, body, { headers: httpHeaders })
                        .pipe(map(data => {
                            return data;
                        }))
                        .subscribe(res => {
                            this.validate(res).then((data) => {
                                resolve(res);
                            }).catch((err) => {
                                reject(err);
                            })
                        }, (err) => {
                            reject(err.error);
                        });
                }).catch((err) => {
                    reject(err);
                })
        })
    }

    /**
     * Method for http delete web service
     * @param route url for the web service call
     * @param headers headers for the web service
     */
    delete(route, headers, body) {
        return new Promise((resolve, reject) => {
                this.getHeaders(headers).then((httpHeaders: HttpHeaders) => {
                    this.http.delete(route, { headers: httpHeaders })
                        .pipe(map(data => {
                            return data;
                        }))
                        .subscribe(res => {
                            this.validate(res).then((data) => {
                                resolve(res);
                            }).catch((err) => {
                                reject(err);
                            })
                        }, (err) => {
                            reject(err.error);
                        });
                }).catch((err) => {
                    reject(err);
                })
        })
    }

    /**
     * Method for http multipart data web service
     * @param route url for the web service call
     * @param headers headers for the web service
     * @param formdata request form data
     */
    multipart(route, headers, formdata) {
        return new Promise((resolve, reject) => {
            
        })
    }

    /**
     * method to validate the response from the web service and return the response back
     * @param response response from the web server
     */
    private validate(response) {
        return new Promise((resolve, reject) => {
            if (response) {
                if (response[consts.response.code] !== null || response[consts.response.code] !== 'undefined') {
                    var statusCode = response[consts.response.code];
                    if (statusCode == '200' || statusCode == '201' || statusCode == '203' || statusCode == '204') {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                } else {
                    /*var error = {}
                    error[consts.response.message] = consts.errorMessages.idlInvalidResponse
                    reject(error);*/
                }
            } else {
                var error = {}
                error[consts.response.message] = consts.errorMessages.idlResponseNotFound
                reject(error);
            }
        })
    }


    /**
     * to get the http headers function
     * @param headers header object from the derived ws class 
     */
    private getHeaders(customHeaders) {
        return new Promise((resolve, reject) => {
            this.getIpAddress().then((data: string) => {
                customHeaders.ip = data;
                this.getGlobalization().then((locale: string) => {
                    customHeaders.locale = locale
                    var headers = new HttpHeaders(customHeaders);
                    resolve(headers);
                }).catch((err) => {
                    var headers = new HttpHeaders(customHeaders);
                    resolve(headers);
                });
            }).catch((err) => {
                var headers = new HttpHeaders(customHeaders);
                resolve(headers);
            })
        })
    }

    /**
    * This method is used to get the public ip address
    */
    private getIpAddress() {
        return new Promise((resolve, reject) => {
            this.http.get(wsConfig.wsConfigs.ipUrl)
                .pipe(map(data => {
                    resolve(JSON.stringify(data));
                })).catch(err => {
                    return Observable.throw({
                        'error': err.error
                    });
                }).subscribe(res => {
                    resolve(JSON.stringify(res));
                }, (error) => {
                    reject(error);
                });
        });
    }

    /**
     * Locale getLocaleName
     */
    private getGlobalization() {
        return new Promise((resolve, reject) => {
            var locale = {}
            this.globalization.getLocaleName()
                .then(res => {
                    locale[wsConfig.wsGlobalizations.name] = res;
                    this.globalization.getPreferredLanguage().then(res => {
                        locale[wsConfig.wsGlobalizations.preferedLanguage] = res;
                        resolve(locale)
                    })
                        .catch(e => {
                            resolve(locale)
                        })
                })
                .catch(e => reject(e));
        });
    }

}