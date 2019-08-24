const uniqid = require('uniqid');
const urls = require('../models/urls');

function saveShortUrl(req, res) {
    let data = '';
    const {urlLink} = req.body;
    let urlData = {
        originalUrl: urlLink,
        urlKey: uniqid(),
    }
    const url = new urls(urlData);
    url.save(function(err){
        if(err) throw err;
        res.json(urlData)
    });
}

module.exports = {
    saveShortUrl,
}