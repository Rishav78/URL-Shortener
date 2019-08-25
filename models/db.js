const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/urlShorter',{ useNewUrlParser: true })
mongoose.connection.on('error', (err) => {
    throw err;
})

module.exports = mongoose;