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
exports.UserService = void 0;
const userModel_1 = require("../model/userModel");
const db_query_1 = require("../utils/db.query");
class UserService {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }
    addUser(userParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let { emailId } = userParams;
            let checkEmail = yield db_query_1.commonDbQuery.get(userModel_1.userModel, { emailId: emailId }, "emailId");
            console.log('>>>>>>>>>checkEmail', checkEmail);
            let emailIds = checkEmail.emailId;
            console.log('>>>>>emailIds', emailIds);
            if (emailIds) {
                return "User's email already exist";
            }
            const userData = yield db_query_1.commonDbQuery.add(userModel_1.userModel, userParams);
            console.log(userData);
            return userData;
        });
    }
    /**
     * check email exist
     * @returns
     */
    checkEmailExist(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmail = yield userModel_1.userModel.exists({ emailId: emailId }).then((dataExist) => {
                if (dataExist) {
                    return true;
                }
                else {
                    return false;
                }
            });
            console.log(userEmail);
            return userEmail;
        });
    }
    /**
     * get all the users
     * @returns
     */
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield userModel_1.userModel.find();
            console.log(userData);
            return userData;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map