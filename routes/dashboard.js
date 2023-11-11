var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Assuming you're fetching 'fakeData' from somewhere
  res.render('dashboard', { title: 'Express', fakeData: yourFakeDataArray });
});

  module.exports = router;
