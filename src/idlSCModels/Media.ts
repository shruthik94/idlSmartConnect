export class Media{
    
    //Define private variables
        private _id: string;
        private _mediaName: string;
        private _mediaUrl: string;
        private _mediaDetails: string;
        private _uploadTime: string;
        private _userId: string;
    
    
    //Getter and setter for data variables
    get id(): string {
        return this._id;
    }
    
    set id(id: string) {
        this._id = id;
    }

    get mediaName(): string {
        return this._mediaName;
    }
    
    set mediaName(mediaName: string) {
        this._mediaName = mediaName;
    }

    get mediaUrl(): string {
        return this._mediaUrl;
    }
    
    set mediaUrl(mediaUrl: string) {
        this._mediaUrl = mediaUrl;
    }

    get mediaDetails(): string {
        return this._mediaDetails;
    }
    
    set mediaDetails(mediaDetails: string) {
        this._mediaDetails = mediaDetails;
    }

    get uploadTime(): string {
        return this._uploadTime;
    }
    
    set uploadTime(uploadTime: string) {
        this._uploadTime = uploadTime;
    }

    get userId(): string {
        return this._userId;
    }
    
    set userId(userId: string) {
        this._userId = userId;
    }
}