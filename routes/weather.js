var express = require('express');
var router = express.Router();
var source = require('../lib/weather');

router.get('/', (req, res, next) => {
  source.weather( data =>  res.json(data) )
});


router.get('/:city', (req, res, next) => {
  const city = req.params.city || 'copenhagen'
  source.weather_by_city(city , data =>  res.json(data) )
});


module.exports = router;
