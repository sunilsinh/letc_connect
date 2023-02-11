const {check, validationResult} = require('express-validator');

/**
 * It's use to show error message while validation.
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const schemaValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({errors: errors.array()});
    next();
  };