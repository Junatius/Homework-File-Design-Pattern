// middleware/morganMiddleware.js

const morgan = require('morgan');
const logger = require('../utils/logger');

const logStream = {
    write: (message) => {
        logger(message.trim());
    },
};

const morganMiddleware = morgan('combined', { stream: logStream });

module.exports = morganMiddleware;
