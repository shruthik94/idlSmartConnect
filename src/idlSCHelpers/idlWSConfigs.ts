/**
 * @author : IDL Systems India Pvt Ltd, @ copyright 2018
 * @version : 1.0
 * @Created by : Shruthi K
 * @creationDate : 29-March-2019
 * @superClass :
 * @interfaces : no interface
 * @changeHistory :
 * Date                    Modified by                     Description
 * @desc : This class is used to store ws configs
 */



/**
* Configurations for webservices
*/
export const wsConfigs = {
    ipUrl: 'http://www.ip-api.com/json',
    baseUrl: 'http://192.168.0.139:3006/api/',
    //baseUrl: 'http://192.168.0.162:3006/api/'
    //baseUrl: 'http://3.17.65.64/isc/api/'
}
/**
* Common entities from globalization
*/
export const wsGlobalizations = {
    name: 'name',
    preferedLanguage: 'preferedLanguage',
}

/**
* routes for the user
*/
export const userWSRoutes = {
    login: 'isc/v1/login',
    media: 'isc/v1/media',
    mediaDelete: 'isc/v1/media/',
    device: 'isc/v1/devices',
    deviceMedia: 'isc/v1/deviceMedia'
}

/**-------------------
* Common headers key names
*/
export const wsHeaders = {
    ip: 'ip',
    locale: 'locale',

    userId: 'userId',
    mediaId: 'mediaId',
    attachmenttype: 'attachmenttype'
}
