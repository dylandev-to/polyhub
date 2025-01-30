const mongoose = require('mongoose');

/**
 * @typedef {Object} ModelSchema
 * @property {string} ID - Unique identifier for the model.
 * @property {string} Title - Title of the model.
 * @property {string} Thumbnail - URL of the thumbnail image.
 * @property {string} Download - URL for downloading the model.
 * @property {Object} Creator - Information about the creator of the model.
 * @property {string} Creator.Username - Username of the creator.
 * @property {string} Creator.DPURL - Display picture URL of the creator.
 * @property {Date} createdAt - Timestamp of when the model was created.
 * @property {Date} updatedAt - Timestamp of when the model was last updated.
 */
const ModelSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    Title: { type: String, required: true },
    Thumbnail: { type: String, required: true },
    Download: { type: String, required: true },
    Creator: {
        Username: { type: String, required: true },
        DPURL: { type: String, required: true }
    }
}, { timestamps: true });

console.log("ModelSchema Initialized")

module.exports = mongoose.model('Model', ModelSchema);