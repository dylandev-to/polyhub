const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const CONFIG = require("./config");
const router = require("../app/router.server");

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

// Start server
app.listen(CONFIG.port, () => {
    console.log(`Server is running on port ${CONFIG.port}`);
});

module.exports = app;
