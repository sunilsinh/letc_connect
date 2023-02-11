"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(config) {
        this.userService = config.userService;
    }
    /**
     * Add new user
     * @param req
     * @param res
     */
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, emailId, password, dateOfJoining, lastUpdated, gender, department, } = req.body;
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
            const userResponse = yield this.userService.addUser(userParams);
            return res.status(200).json({
                status: 200,
                message: 'data successfully added',
                data: userResponse
            });
        });
    }
    /**
     * Get all users
     * @param req
     * @param res
     */
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userResponse = yield this.userService.getUsers();
            return res.status(200).json({
                status: 200,
                message: 'data successfully added',
                data: userResponse
            });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map