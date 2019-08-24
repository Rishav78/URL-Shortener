const router = require('express').Router();
const controllers = require('../controllers');

router.post('/', controllers.shortUrl.saveShortUrl);

module.exports = router;