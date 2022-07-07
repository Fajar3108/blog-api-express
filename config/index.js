const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    DB_URI: process.env.DB_URI,
    DB_DATABASE: process.env.DB_DATABASE,
    APP_PORT: process.env.APP_PORT, 
};