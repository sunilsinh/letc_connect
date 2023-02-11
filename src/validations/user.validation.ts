const {check, validationResult} = require('express-validator');

export const userValidations = [
  check('firstname')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
];

