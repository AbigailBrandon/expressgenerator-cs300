var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// In your profile route
router.get('/', async function(req, res, next) {
  // For User model for MongoDB
  const userUsers = await User.findOne({ username: 'johndoe' }); // Fetch user profile
  res.render('users', { user: userUsers}); // Render with EJS
});

module.exports = router;
