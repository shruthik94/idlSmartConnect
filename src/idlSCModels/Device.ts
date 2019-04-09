export class Device{

    private _id: string;
    private _deviceId: string;
    private _userId: string;
    private _status: string;
    

    //Getter and setter for data variables
    get id(): string {
        return this._id;
    }
    
    set id(id: string) {
        this._id = id;
    }

    get deviceId(): string {
        return this._deviceId;
    }
    
    set deviceId(deviceId: string) {
        this._deviceId = deviceId;
    }

    get userId(): string {
        return this._userId;
    }
    
    set userId(userId: string) {
        this._userId = userId;
    }

    get status(): string {
        return this._status;
    }
    
    set status(status: string) {
        this._status = status;
    }
}