export const passwordType = {
    text: 'text',
    password: 'password'
}

/**
 * Constants for server in response
 */
export const response = {
    token: 'token',
    message: 'message',
    code: 'code',
    userId: 'userid',
    mediaId: 'mediaId'
}

/**
 * Constants for store the auth tokens
 */
export const token = {
    bearer: 'Bearer ',
    device: 'deviceToken',
    user: 'userToken'
}

/**
 * message to show once the call failure
 */
export const errorMessages = {
    idlInvalidResponse: 'Invalid Response',
    idlResponseNotFound: 'Response not found',
    idlDeviceRegistration: 'Failed to register device, Unable to get the token.',
    idlUserLogin: 'Failed to login.',
    idlUserUpdate: 'Unable to update user.',
    unableToGetDeviceData: 'Unable to get device data from database',
    unableToGetMediaData: 'Unable to get media data from database',
    unableToGetUserData: 'Unable to get user data from database',
    unableToParseResponse: 'Unable to parse response',
    unableToLogout: 'Unable to logout user',
    unableToChangePassword: 'Unable to change password.',
    unableToGetNotificationId: 'Unable to get notification id',
    unableToGetNotificationForId: 'Unable to get notification for id'
}

/**
 * Application alert messages
 */
export const alertTitles = {
    
    Register: 'Register',
    Login: 'Login',
    logout: 'Logout',
    getMedia: 'Get Media',
    deleteMedia: 'Delete Media',
    dashBoard: 'Dash Board',
    deviceDetails: 'Device Details',
    addMedia: 'Add Media PAge'
}

/**
 * Application alert messages
 */
export const alertMessages = {
    termsAndConditionsDecline: 'Please accept terms and conditions to submit.',
    failAuth: "Failed to Authenticate",
    detailEntry: "Enter Proper Details",
    passwordMismatch: "Password Missmatch",
    tokenfails: "Please try again",
    changePasswordMatch: "Old and New Password Should not be Same."
}

/**
 * Application alert messages
 */
export const alertButtons = {
    dismiss: 'Dismiss',
    ok: 'Ok'
}

/**
 * loading messages
 */
export const loadingMessages = {
    authenticating: 'Authenticating...',
    pleaseWait: 'Please wait...',
    logout: 'Logging out...',
    updating: 'Updating...',
    signUp: 'Signing up...',
    login: 'Logging in...',
    initializing: 'Initialization...',
    media: 'Getting Media List'
}

/**
 * store the application variables
 */
export const globalVariables = {
    userId: 'userId',
    mediaId: 'mediaId',
    mediaName: 'mediaName',
    deviceId: 'deviceId'
}