var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Account.findAll().then(function(accounts) {
    console.log(accounts)
    res.render('index', {
      accounts: accounts
    })
  })
});

module.exports = router;
