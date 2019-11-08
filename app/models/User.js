/*jshint esversion: 6 */
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    public_key: { type: String, default: '' },
    private_key: { type: String, default: '' }
});

module.exports = User = mongoose.model("users", UserSchema);