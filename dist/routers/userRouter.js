"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const request_schema_validation_1 = require("../middleware/request-schema.validation");
const validations_1 = require("../validations");
class UserRouter {
    constructor(config) {
        this.userController = config.userController;
        this.Router = config.Router;
    }
    /**
     * Build user's router
     * @returns Object
     */
    buildExpressRouter() {
        const router = this.Router();
        router.get('/healthcheck', (req, res) => {
            res.json({ msg: 'Healthcheck is working!!!' });
        });
        router.post('/adduser', validations_1.userValidations, request_schema_validation_1.schemaValidationError, this.userController.addUser.bind(this.userController));
        router.get('/getusers', this.userController.getUsers.bind(this.userController));
        return router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=userRouter.js.map