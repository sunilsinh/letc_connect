import mongoose, {Document} from "mongoose";

export interface IUser {
    firstname:String;
    lastname:String;
    emailId:String;
    password:String;
    dateOfJoining: String;
    lastUpdated:String;
    gender:String;
    department:String;

}