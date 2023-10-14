const fs = require('fs');
const path = require('path');

const privateKeyPath = path.resolve(__dirname, '../../', process.env.JWT_SECRET);
const publicKeyPath = path.resolve(__dirname, '../../', process.env.JWT_PUBLIC);

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

const jwtExpiration = process.env.JWT_EXPIRATION;

module.exports = {
    privateKey,
    publicKey,
    jwtExpiration
}