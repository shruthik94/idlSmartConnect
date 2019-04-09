export class deviceMedia{

    private _id: string;
    private _mediaId: any[];
    private _userId: string;
    private _type: string;
    private _date: string;

    //Getter and setter for data variables
    get id(): string {
        return this._id;
    }
    
    set id(id: string) {
        this._id = id;
    }

    get mediaId(): any[] {
        return this._mediaId;
    }
    
    set mediaId(mediaId: any[]) {
        this._mediaId = mediaId;
    }


    get userId(): string {
        return this._userId;
    }
    
    set userId(userId: string) {
        this._userId = userId;
    }

    get type(): string {
        return this._type;
    }
    
    set type(type: string) {
        this._type = type;
    }

    get date(): string {
        return this._date;
    }
    
    set date(date: string) {
        this._date = date;
    }


}