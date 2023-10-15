const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    logger(`[Error] ${err.stack}`);

    res.status(500).send('Something went wrong!');
};

module.exports = errorHandler;