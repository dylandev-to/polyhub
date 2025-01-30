const mongoose = require('mongoose');

/**
 * User Schema
 * 
 * This schema defines the structure of the User document in the MongoDB database.
 * 
 * @typedef {Object} UserSchema
 * @property {String} username - The unique username of the user. This field is required.
 * @property {String} password - The password of the user. This field is required.
 * @property {Array<ObjectId>} models - An array of ObjectIds referencing the 'Model' collection.
 * @property {Date} createdAt - The timestamp when the user document was created.
 * @property {Date} updatedAt - The timestamp when the user document was last updated.
 */
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    models: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Model' }]
}, { timestamps: true });

console.log("UserSchema Initialized")

module.exports = mongoose.model('User', UserSchema);
