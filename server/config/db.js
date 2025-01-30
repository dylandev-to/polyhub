const mongoose = require('mongoose');
const CONFIG = require('./config');

/**
 * Connects to the MongoDB database using the connection URL specified in the configuration.
 * 
 * @async
 * @function connectDB
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 * @throws Will throw an error if the connection fails.
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(CONFIG.dbUrl, {
            // Deprecated -> useUnifiedTopology: true,
            // Deprecated -> useNewUrlParser: true
            // Deprecated -> useCreateIndex: true 
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        // Require the user and model schemas
        require('../app/models/model.server.model');
        require('../app/models/user.server.model');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;