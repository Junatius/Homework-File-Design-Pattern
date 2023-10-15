// utils/logger.js

const fs = require('fs');
const path = require('path');

const logsFolder = path.join(__dirname, '..', 'logs');
const logFilePath = path.join(logsFolder, 'all.log');

if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
}

const logger = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;

    console.log(logMessage);  // Log to console

    // Log to file
    fs.appendFileSync(logFilePath, logMessage + '\n', { encoding: 'utf8' });
};

module.exports = logger;
