const path = require('path')
require("dotenv").config({
    path: path.join(__dirname, ".env")
})

/**
 * Configuration object for the server.
 * 
 * @constant
 * @type {Object}
 * @property {number|string} port - The port number on which the server will run. Defaults to 3000 if not provided.
 * @property {string|undefined} dbUrl - The URL for the database connection. Defaults to undefined if not provided.
 * @property {string|undefined} pizzaPolyApiKey - The API key for the Pizza Poly service. Defaults to undefined if not provided.
 */
const CONFIG = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || undefined,
    pizzaPolyApiKey: process.env.PIZZA_POLY_API_KEY || undefined
};

module.exports = CONFIG;