var express = require('express');
var router = express.Router();

var currentYear = new Date().getFullYear();
var companyName = "Senaeyat | Lootah Real Estate";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Senaeyat | Home', currentYear: currentYear, company: companyName});
});
module.exports = router;
