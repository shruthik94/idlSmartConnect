/**
 * Configurations for databases
 */
export const dbConfigs = {

    databaseName: 'IDLSMARTCONNECT',
    location: 'default',
    data: 'Data',
    databaseVersion: '1.0'
}

/**
 * configuration of database tables
 */
export const idlSCTables = {

    idlSCUser: 'CREATE TABLE IF NOT EXISTS IDLSC_User (ISCU_id varchar(255) NOT NULL PRIMARY KEY, ISCU_userName varchar(255), ISCU_email varchar(255), ISCU_password varchar(255))',
    idlSCMedia: 'CREATE TABLE IF NOT EXISTS IDLSC_Media (ISCM_id varchar(255) NOT NULL PRIMARY KEY, ISCM_mediaName varchar(255), ISCM_mediaUrl varchar(255), ISCM_uploadTime varchar(255), ISCM_userId varchar(255))',
    idlSCDevice: 'CREATE TABLE IF NOT EXISTS IDLSC_Device (ISCD_id varchar(255) NOT NULL PRIMARY KEY, ISCD_deviceId varchar(255), ISCD_userId varchar(255), ISCD_status(255))',
    idlSCDeviceMedia: 'CREATE TABLE IF NOT EXISTS IDLSC_DeviceMedia (ISCDM_id varchar(255) NOT NULL PRIMARY KEY, ISCDM_mediaId varchar(255), ISCDM_userId varchar(255), ISCDM_type varchar(255), ISCDM_date varchar(255))'

}

/**
 * Queries for IDL Smart Connect User 
 */
export const idlSCUserQuery = {
    insertUser: 'INSERT INTO IDLSC_User (ISCU_id, ISCU_userName, ISCU_email, ISCU_password) VALUES (?,?,?,?)',
    deleteUsers: 'DELETE FROM IDLSC_User',
    deleteUserByEmail: 'DELETE FROM IDLSC_User WHERE ISCU_email = ?',
    getUserById: 'SELECT * FROM IDLSC_User WHERE IDLSC_User = ?'
}

/**
 * Queries for IDL Smart Connect Media 
 */
export const idlSCMediaQuery = {
    insertMedia: 'INSERT INTO IDLSC_Media (ISCM_id, ISCM_mediaName, ISCM_mediaUrl, ISCM_uploadTime, ISCM_userId) VALUES (?,?,?,?,?)',
    deleteMedia: 'DELETE FROM IDLSC_Media WHERE ISCM_id = ?',
    getMediaById: 'SELECT * FROM IDLSC_Media WHERE ISCM_userId = ?'
}

/**
 * Queries for IDL Smart Connect Device 
 */
export const idlSCDeviceQuery = {

}

/**
 * Queries for IDL Smart Connect Device_Media 
 */
export const idlSCDeviceMediaQuery = {

}