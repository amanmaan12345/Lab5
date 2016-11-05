var express = require('express');
var router = express.Router();

// reference the Account model
var Account = require('../models/account');
var passport = require('passport');


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/login');
  }
}
/* GET users listing. */
router.get('/',isLoggedIn, function(req, res, next) {

    Account.find(function (err, users) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      res.render('users',{
        title: 'Created Users',
        users: users,
        user: req.user
      })
    }
  });

});



module.exports = router;

/*
// GET teams home page - show list of teams
router.get('/', isLoggedIn, function(req, res, next) {
  // use Team model to get the list of teams from MongoDB
  Team.find(function(err, teams) {
    if (err) {
      console.log(err);
      res.redirect('error');
    }
    else {
      // load teams.ejs view
      res.render('teams', {
        title: 'Playoff Teams',
        teams: teams,
        user: req.user
      })
    }
  });
});*/