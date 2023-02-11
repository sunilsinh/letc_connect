import { IUser } from "../dtos/user.dto";

import { userModel } from "../model/userModel";

import { commonDbQuery } from "../utils/db.query"; 


export interface UserServiceConfig {
    baseUrl: String;
}
export class UserService{
    private readonly baseUrl : String; 
    
    constructor(config:UserServiceConfig){ 
        this.baseUrl = config.baseUrl;
    }

    public  async addUser(userParams:IUser){
        let { emailId } = userParams;
        let checkEmail:any = await commonDbQuery.get(userModel, {emailId:emailId}, "emailId");
        let  emailIds  = checkEmail.emailId;
        if(emailIds ){
            return `data already exist`;
        }

        const userData = await  commonDbQuery.add(userModel, userParams);
         console.log(userData);       
        return userData;
    }
    /**
     * check email exist
     * @returns 
     */
     public async checkEmailExist(emailId:String){
        const userEmail = await  userModel.exists({emailId:emailId}).then((dataExist)=>{
            if(dataExist){
                 return true;   
            } else {
                return false;

            }
        })
        console.log(userEmail);       
       return userEmail;
    }

    /**
     * get all the users
     * @returns 
     */
    public async getUsers(){
        const userData = await  userModel.find();
        console.log(userData);       
       return userData;
    }
}