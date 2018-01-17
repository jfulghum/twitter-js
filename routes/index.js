const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets, showForm: true } );
});

router.get('/users/:name', function (req, res) {
  let name = req.params.name;
  let tweets = tweetBank.find( {name} );
  res.render('index', { tweets, showForm: true, name } );
});

router.get('/tweets/:uniqueID', function (req, res) {
  let uniqueID = +req.params.uniqueID
  let tweets = tweetBank.find( { uniqueID } );
  res.render('index', { tweets } );
});


router.post('/tweets', function (req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
});



module.exports = router;
