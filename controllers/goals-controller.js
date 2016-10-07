//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//PASSPORT SETUP
//=========================================
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


router.get('/:id/new-goal', function(req, res){

    res.render('./goals/new-goal');


});









module.exports = router;
