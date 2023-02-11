// required attributes
import { model, Schema, Model, Document } from "mongoose";
// import { IUser } from "../dtos/user.dto";
  
interface IUser extends Document {
    firstName: String,
    lastName: String,
    age: String,
    emailId: String,
    password: String,
    dateOfJoining: String,
    lastUpdated: String,
    gender: String,
    department: String,
  }
  
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: String,
    emailId: String,
    password: String,
    dateOfJoining: String,
    lastUpdated: String,
    gender: String,
    department: String,
});

export const userModel = model('User', userSchema);
