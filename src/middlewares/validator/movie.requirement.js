const { body, param, query } = require('express-validator');

const createValidator = [
    body('title').notEmpty().withMessage('Title is Required'),
    body('genres').notEmpty().withMessage('Genre is Required'),
    body('year').notEmpty().withMessage('Role is Required')
                .isInt({ min: 1900, max: new Date().getFullYear() })
                .withMessage(`Please provide a valid year.`)
];

const updateValidator = [
    body('title').optional(),
    body('genres').optional(),
    body('year').optional()
                .isInt({ min: 1900, max: new Date().getFullYear() })
                .withMessage(`Please provide a valid year.`)

];

module.exports = {
    createValidator,
    updateValidator
}