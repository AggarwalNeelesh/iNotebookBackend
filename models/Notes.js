// Model name start with Capital letterconst mongoose = require('mongoose');
const mongoose = require('mongoose');

const { Schema } = mongoose

const NotesSchema = new Schema({
    // We want that if a user upload some notes, then other users should be able to read it.
    user:{
        type: mongoose.Schema.Types.ObjectId, // Foreign Key
        ref: 'user' // reference - User model
    },
    title:{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    tag :{
        type: String,
        default: "General"
    },
    date :{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', NotesSchema);