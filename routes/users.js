var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// In your profile route
router.get('/', async function(req, res, next) {
  // Assuming you have a User model for MongoDB
  const userProfile = await User.findOne({ username: 'johndoe' }); // Fetch user profile
  res.render('profile', { user: userProfile }); // Render with EJS
});

module.exports = router;

