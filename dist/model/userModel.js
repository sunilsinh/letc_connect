"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
// required attributes
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
exports.userModel = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=userModel.js.map