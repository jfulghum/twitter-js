const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')
const routes = require('./routes');
const bodyParser = require('body-parser')


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/', routes);


app.listen(3000);
