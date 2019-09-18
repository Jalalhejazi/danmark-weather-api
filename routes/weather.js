var express = require('express');
var router = express.Router();
var vejret      = require('../lib/weather');


router.get('/', (req, res, next) => {
  vejret( data =>  res.json(data) )
});


router.get('/about', (req, res, next) => {
  res.send("Hello from repo")
});



module.exports = router;
