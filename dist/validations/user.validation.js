"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const { check, validationResult } = require('express-validator');
exports.userValidations = [
    check('firstname')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('User name can not be empty!')
];
//# sourceMappingURL=user.validation.js.map