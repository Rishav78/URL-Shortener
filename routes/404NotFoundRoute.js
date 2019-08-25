const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.error.serveNotFoundPage);

module.exports = router;