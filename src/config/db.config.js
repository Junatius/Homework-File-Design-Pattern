require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const PORT = process.env.PORT_APP || 3000;
const API = process.env.APP_PATH || "api/v1";

module.exports = {
    pool,
    API,
    PORT
}
