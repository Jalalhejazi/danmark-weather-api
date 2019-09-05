var express = require('express');
var router = express.Router();
var pkg = require('../package');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: pkg.name, version : pkg.version });
});

module.exports = router;
