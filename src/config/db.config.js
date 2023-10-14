require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const API = process.env.API || 3000;
const PORT = process.env.PORT || "api/v1";

module.exports = {
    pool,
    API,
    PORT
}
