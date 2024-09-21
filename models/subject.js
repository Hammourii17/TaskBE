const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name : { type: String, required: true },
    passMark : { type: Number, default: 50 },

});

module.exports = mongoose.model('Subject', subjectSchema);
