const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: {
            type: String,
        },
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model('users', userSchema, 'users');
module.exports = userModel;