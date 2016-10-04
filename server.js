// MODULES
// ==================================
pry = require('pryjs')
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//MODELS: This is requiring from the user.js schema
//==============================================
// var User = require('./models/user');

//MODULES: ===============================
//To connect from controlers
// var usersController = require('./controllers/users.js')
// var app = express();

// DATABASE CONNECTION
// ==================================
// mongoose.connect('mongodb://localhost/auth-test-app');

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

//This block needs to be addded from documentation
app.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTING MIDDLEWARE
//==================================
app.use('/users', usersController);

// ROUTES
// ==================================

var hello = function(req, res, next){
  console.log("Hello");
  // console.log(req);

  next();
};

app.get('/', hello, function(req, res) {
  res.json({status: 200, message: "Everythings A-Okay"});
});

// SERVER LISTENING ON PORT
// ==================================
app.listen(4000,function(){
  console.log("====================================");
  console.log("GOAL DIGGER LISTENING ON PORT 4000");
  console.log("====================================")
})
