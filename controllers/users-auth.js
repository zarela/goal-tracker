//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//PASSPORT SETUP
//=========================================
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

//Register with Authentication
router.post('/register', function(req, res){
  console.log(req.body)
  User.register(new User(
    {username: req.body.username}),
    req.body.password,
    function(err, user) {
      if (err) {
        // return res.json({user:user});
        return res.status(400).send("Could not register");
      } // end if
      passport.authenticate('local')(req, res, function(){
      res.redirect('/');
      console.log(req.user);
    });
  });
});


//trying code
// router.post('/register', function(req, res){
//   User.register(
//     new User({
//       username: req.body.username
//     }),
//     req.body.password,
//     function(err, user){
//       if (err) {
//         console.log(err);
//         return res.status(400).send('Could not register');
//       } else {
//         console.log('no error when creating ', user);
//         req.flash('info', 'Registration was a success!');
//       } // end if else
//       res.redirect('/');
//     } // end function
//   ) // end User.register
// });


router.post('/login',
  passport.authenticate('local', {failureRedirect: '/'}),
  function(req, res){
    console.log(req.body);
    req.session.save(function(err){
      if(err) {return next(err);}
      User.findOne({username: req.session.passport.user}).exec()
      .then(function(user){
        //res.redirect('./home/'+ req.user._id);
        console.log(req.session);
        res.redirect('./'+ req.user._id); //This will go to user page
        //res.redirect('./user'+ req.user._id); //This goes to index
        //res.send("Login Successful");
      })
      .catch(function(err){
        console.log("ERROR: ", err);
        res.head(400);
      })
    })
  });


  router.delete('/user/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });


  //Authentication
  var authenticate = function(req, res, next) {
    if (!req.user || req.user._id != req.params.id) {
      res.json({status: 401, message: 'unauthorized'})
    } else {
      next()
    }
  }

  //User page without Authentication
  router.get('/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      console.log(user);
      // res.send(author);
      res.render('users/user', {user:user});
    });
  });




module.exports = router;
