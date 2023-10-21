const authMiddleware = require('./auth.middlware');
const validator = require('./validator');
const morganMiddleware = require('./morgan.middleware');
const errorHandler = require('./errorHandler.middlware');
const uploadMiddleware = require('./uploadFile.middleware');

module.exports = {
    authMiddleware,
    morganMiddleware,
    errorHandler,
    uploadMiddleware,
    validator,
}