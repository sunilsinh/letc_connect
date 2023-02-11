import { Router } from "express";
import { AppConfig, App } from "./app/app";
// import { connectDB } from "./config/database";
import { config } from "./config/config";
import { UserRouter } from "./routers";
import {UserController}  from "./controllers";
import { UserService } from "./services";
import { connectDb } from "./config/database";

//import { userSchemaData } from "./model/userModel";




const { port, baseUrl }  = config;

const appConfig: AppConfig = {
    port,
}
const userService = new UserService({baseUrl: 'http:google.com....'});

const userController = new UserController({userService});

const userRouter = new UserRouter({Router,userController});

const leapApp = new App(appConfig);

leapApp.bootstrap().then(()=>{
    leapApp.mount('/', 
    userRouter.buildExpressRouter(),
    ); // It can be multiple router
    leapApp.listen();
    connectDb();
});