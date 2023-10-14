const { body, param, query } = require('express-validator');

const loginValidator = [
    body('email').notEmpty().withMessage('Email is Required')
                 .isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is Required')
                    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const registerValidator = [
    body('email').notEmpty().withMessage('Email is Required')
                 .isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is Required')
                    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('gender').notEmpty().withMessage('Gender is Required')
                  .isIn(['Male', 'Female', 'male', 'female']).withMessage('Invalid gender'),
    body('role').notEmpty().withMessage('Role is Required')
];

const updateValidator = [
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('gender').optional().isIn(['Male', 'Female', 'male', 'female']).withMessage('Invalid gender'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('role').optional()
];

module.exports = {
    loginValidator,
    registerValidator,
    updateValidator
};
