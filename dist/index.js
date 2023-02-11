"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("./app/app");
// import { connectDB } from "./config/database";
const config_1 = require("./config/config");
const routers_1 = require("./routers");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const database_1 = require("./config/database");
//import { userSchemaData } from "./model/userModel";
const { port, baseUrl } = config_1.config;
const appConfig = {
    port,
};
const userService = new services_1.UserService({ baseUrl: 'http:google.com....' });
const userController = new controllers_1.UserController({ userService });
const userRouter = new routers_1.UserRouter({ Router: express_1.Router, userController });
const leapApp = new app_1.App(appConfig);
leapApp.bootstrap().then(() => {
    leapApp.mount('/', userRouter.buildExpressRouter()); // It can be multiple router
    leapApp.listen();
    (0, database_1.connectDb)();
});
//# sourceMappingURL=index.js.map