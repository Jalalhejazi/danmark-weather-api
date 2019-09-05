var express = require('express');
var router = express.Router();
var vejret      = require('../lib/weather');


router.get('/', (req, res, next) => {
  vejret( data =>  res.json(data) )
});

module.exports = router;
