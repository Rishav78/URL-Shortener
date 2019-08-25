function serveNotFoundPage(req, res) {
    res.render('404notFound');
}

module.exports = {
    serveNotFoundPage,
}