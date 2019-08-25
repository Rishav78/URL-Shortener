const uniqid = require('uniqid');
const urls = require('../models/urls');
const validUrl = require('valid-url');

function saveShortUrl(req, res) {
    const {urlLink} = req.body;
    if(validUrl.isUri(urlLink)) {
        let urlData = {
            originalUrl: urlLink,
            urlKey: uniqid(),
        }
        const url = new urls(urlData);
        url.save(function(err){
            if(err) throw err;
            res.json({
                status: true,
                res: urlData
            });
        });
    }else{
        res.json({
            status: false,
        })
    }
}

function getSaveUrl(req, res) {
    let {params} = req;
    console.log(params.id)
    urls.findOne({
        urlKey: req.params.id
    },{originalUrl: 1})
        .then((result) => {
            res.redirect(result.originalUrl);
        })
}

module.exports = {
    saveShortUrl,
    getSaveUrl,
}