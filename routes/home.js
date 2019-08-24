const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('shortUrl')
});

module.exports = router;