const router = require('express').Router();
const controllers = require('../controllers');

router.post('/', controllers.shortUrl.saveShortUrl);
router.get('/:id', controllers.shortUrl.getSaveUrl);

module.exports = router;