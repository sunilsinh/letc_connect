"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidationError = void 0;
const { check, validationResult } = require('express-validator');
/**
 * It's use to show error message while validation.
 * @param req
 * @param res
 * @param next
 * @returns
 */
const schemaValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    next();
};
exports.schemaValidationError = schemaValidationError;
//# sourceMappingURL=request-schema.validation.js.map