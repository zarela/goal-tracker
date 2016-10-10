// MODULES
// ==================================
pry = require('pryjs')
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var passport = require('passport');
var methodOveride = require('method-override');
var LocalStrategy = require('passport-local').Strategy;
mongoose.Promise = global.Promise; //*******
var app = express();

//MODELS: This is requiring from the user.js schema
//==============================================
var User = require('./models/user');

// DATABASE CONNECTION
// ==================================
var db = mongoose.connection;
//Local connection only:
// mongoose.connect('mongodb://localhost/goal-digger');

//Local connection and Heroku URL connection
var mongoURI =  process.env.MONGODB_URI || 'mongodb://localhost/goal-digger';
mongoose.connect(mongoURI);

db.on('error', function(err){console.log(err);});

db.once('open', function(){
console.log("***DATABASE HAS BEEN CONNECTED***");
});

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOveride('_method'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//PASSPORT
//==============================================
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

// ROUTES
// ==================================
// var hello = function(req, res, next){
//   console.log("Hello");
//   // console.log(req);
//   next();
// };
//
// app.get('/', hello, function(req, res) {
//   res.json({status: 200, message: "Everythings A-Okay"});
// });

//ROUTING MIDDLEWARE
//==================================
app.use('/', require('./controllers/index.js'));
// app.use('/users', require('./controllers/users-auth.js'));//*****maybe
app.use('/users', require('./controllers/users.js'));

// SERVER LISTENING ON PORT
// ==================================
// app.listen(process.env.PORT || 4000 ); // ******This works for Heroku

app.listen(process.env.PORT ||4000,function(){
  console.log("====================================");
  console.log("GOAL DIGGER LISTENING ON PORT 4000");
  console.log("====================================")
})
