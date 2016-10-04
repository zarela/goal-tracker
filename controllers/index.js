//ROUTER SETUP
//===========================================
var express = require('express');
var router = express.Router();

//PASSPORT CONFIGURATION
//===========================================
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require ('../models/user');


//MAIN PAGE (CONNECTING TO LAYOUT AND HOME)
//=========================================
router.get('/', function(req, res){
  var viewData = {title: 'Goal Digger'}
  res.render('home', viewData);
});

module.exports = router;
