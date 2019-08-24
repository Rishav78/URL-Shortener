const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/urlShorter')
mongoose.connection.on('error', (err) => {
    throw err;
})

module.exports = mongoose;