const express = require('express');
const app = express();
const cluster = require('cluster');
const port = 3000;
const cpu = require('os').cpus().length;
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public', 'JavaScript')));
app.use('/', express.static(path.join(__dirname, 'public', 'CSS')));
app.use('/', express.static(path.join(__dirname, 'public', 'HTML')));
app.use('/', express.static(path.join(__dirname, 'public', 'images')));
app.set('view engine', 'ejs');
app.use(express.json()); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(express.urlencoded({extended: true}));

if(cluster.isMaster) {
    for(let i=0;i<cpu;i++) {
        cluster.fork();
    }
}else{
    app.use('/', require('./routes'));
    app.listen(port, function(err) {
        if(err) throw err;
        console.log(`listening on port ${port}`)
    });
}