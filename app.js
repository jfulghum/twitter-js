const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')
const routes = require('./routes');


app.use('/', routes);


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use('/special', (req, res, next) => {
console.log("This is an updated special place.");
next();
});

app.use(express.static('public'));

// app.get('/special/subpath', (req, res) =>
// res.send("You've reached the special place."));

// app.get('/', (req, res) => {
// // res.render('index', {title: 'Hall of Fame', people: people} ));
// tweetBank.add("Sarah", "WOO")
// res.render('index', {people: tweetBank.list()} );
// })

// app.get('/tweets', (req, res) =>
// res.render('index', {people: tweetBank.list()} ));


// app.get('/news', (req, res) =>
// res.send('this is the evening news'));


// var locals = {
// title: 'An Example',
// people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
// ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
// console.log(output);
// });


app.listen(3000);
