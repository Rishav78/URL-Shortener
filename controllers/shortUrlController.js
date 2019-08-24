const services = require('../services');

function saveShortUrl(req, res) {
    services.shortUrl.saveShortUrl(req, res);
}

module.exports = {
    saveShortUrl,
}