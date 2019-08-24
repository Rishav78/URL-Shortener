const mongoose = require('./db');

let urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
    },
    urlKey: {
        type: String,
    },
})

module.exports = mongoose.model('urls', urlSchema);