var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Example data for demonstration purposes
  const fakeData = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'Description for Project Alpha',
      createdAt: new Date('2023-01-01').toDateString(),
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Description for Project Beta',
      createdAt: new Date('2023-02-15').toDateString(),
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Description for Project Gamma',
      createdAt: new Date('2023-03-20').toDateString(),
      status: 'Not Started'
    },
    // Add more items as needed
  ];

  // Example username, replace with actual logic to get the logged-in user's username
  const username = 'YourUsername';

  // Rendering the dashboard view with fakeData and username
  res.render('dashboard', { fakeData: fakeData, username: username });
});



app.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade');
    } else {
        next(err);
    }
});

module.exports = router;