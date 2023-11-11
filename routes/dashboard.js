
var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function(req, res, next) {
  let fakeData = await axios.get('https://jsonplaceholder.typicode.com/todos'); // example endpoint
  res.render('dashboard', { fakeData: fakeData.data });
});

module.exports = router;
