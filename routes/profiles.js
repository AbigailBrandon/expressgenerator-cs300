var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Example fake user data
    const fakeUserData = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
    res.render('users', { user: fakeUserData });
  });
  
  module.exports = router;