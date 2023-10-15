const authMiddleware = require('./auth.middlware');
const validator = require('./validator');
const morganMiddleware = require('./morgan.middleware');
const errorHandler = require('./errorHandler.middlware');

module.exports = {
    authMiddleware,
    morganMiddleware,
    errorHandler,
    validator
}