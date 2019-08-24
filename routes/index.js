const router = require('express').Router();
const shortUrl = require('./shortUrlRoute');
const home = require('./home');

router.use('/', home);
router.use('/shorturl', shortUrl);

module.exports = router;
