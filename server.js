const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json()); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err) throw err;
    console.log(`listening on port ${port}`)
});