const services = require('../services');

function saveShortUrl(req, res) {
    services.shortUrl.saveShortUrl(req, res);
}

function getSaveUrl(req, res) {
    services.shortUrl.getSaveUrl(req, res);
}

module.exports = {
    saveShortUrl,
    getSaveUrl,
}