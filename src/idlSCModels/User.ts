export class User {
    
//Define private variables
    private _id: string;
    private _userName: string;
    private _email: string;
    private _password: string;
    
//Getter and setter for data variables
get id(): string {
    return this._id;
}

set id(id: string) {
    this._id = id;
}

get userName(): string {
    return this._userName;
}

set userName(userName: string) {
    this._userName = userName;
}

get email(): string {
    return this._email;
}

set email(email: string) {
    this._email = email;
}

get password(): string {
    return this._password;
}

set password(password: string) {
    this._password = password;
}

}