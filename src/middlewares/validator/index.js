const { validationResult } = require('express-validator');
const userRequirements = require('./user.requirement');
const movieRequirements = require('./movie.requirement');
const uploadRequirements = require('./upload.requirements');

const requirements = {
    ...userRequirements,
    ...movieRequirements,
    uploadRequirements
}

const validate = (req, res, next) => {
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
        next();
    } else {
        const errorMessage = errors.array()[0]?.msg || 'Validation error';
        return res.status(400).json({ message: errorMessage });
    }
};

module.exports = {
    requirements,
    validate,
};