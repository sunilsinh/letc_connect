import { Router } from "express";
import  {UserController}  from "../controllers";
import { schemaValidationError } from "../middleware/request-schema.validation";
import { userValidations } from "../validations";


export interface UserRouterConfig{
    userController : UserController
    Router: typeof Router;
}

export class UserRouter{
    private readonly userController : UserController;
    private readonly Router: typeof Router;

    constructor(config: UserRouterConfig){
        this.userController = config.userController;
        this.Router = config.Router;
    }
    /**
     * Build user's router 
     * @returns Object
     */
    public buildExpressRouter():Router{
        const router = this.Router();

        router.get('/healthcheck',(req, res)=>{
            res.json({msg: 'Healthcheck is working!!!'})
        });

        router.post('/adduser',
            userValidations,
            schemaValidationError,
            this.userController.addUser.bind(this.userController)
        );
        router.get('/getusers',
            this.userController.getUsers.bind(this.userController)
        );

        return router;
    }

    
}