const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            trim: true
        },
        content: {
            type: String,
            require: true
        },
        userId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const notesModel = mongoose.model('notes', NotesSchema, 'notes');
module.exports = notesModel;