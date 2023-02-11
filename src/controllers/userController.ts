import { CommonResponse } from "../dtos/common.dto";
import { IUser } from "../dtos/user.dto";
import { UserService } from "../services/userService"

export interface UserControllerConfig {
    userService: UserService;
}

export class UserController {
    private readonly userService : UserService;

    constructor(config:UserControllerConfig){
        this.userService = config.userService;
    }

    /**
     * Add new user
     * @param req 
     * @param res 
     */
    public async addUser(req, res):Promise<CommonResponse>{
        const {
            firstname,
            lastname,
            emailId,
            password,
            dateOfJoining,
            lastUpdated,
            gender,
            department,
        }: IUser   = req.body;

        const userParams = {
            firstname,
            lastname,
            emailId,
            password,
            dateOfJoining,
            lastUpdated,
            gender,
            department,
        };       
        const userResponse = await this.userService.addUser(userParams);
        return res.status(200).json({
            status:200,
            message:'data successfully added',
            data:userResponse
        });
    }

    /**
     * Get all users
     * @param req 
     * @param res 
     */
     public async getUsers(req, res):Promise<IUser>{   
        const userResponse = await this.userService.getUsers();
        return res.status(200).json({
            status:200,
            message:'data successfully added',
            data:userResponse
        });
    }
}