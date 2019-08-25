const router = require('express').Router();
const shortUrl = require('./shortUrlRoute');
const home = require('./home');
const notFound = require('./404NotFoundRoute');

router.use('/', home);
router.use('/shorturl', shortUrl);
router.use('/error', notFound);

module.exports = router;
