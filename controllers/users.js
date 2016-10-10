//ROUTER SETUP
//=========================================
var express = require('express');
var router = express.Router();

//PASSPORT SETUP
//=========================================
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Goal = require('../models/goal');
var Reward = require('../models/reward');

//AUTHENTICATION
//==================================================
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

//Different version of Register User
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

//Login User
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

//Showing all users ***************************
router.get('/allusers', function(req, res){
  User.find({}, function(err, users){
    res.render('users/allusers', {users:users});
  });
});


//RECORDING USERS GOALS
//=====================================================
//Creating and Saving new goles on user's page
  router.post('/:id/goals', function(req, res){
    User.findById(req.params.id, function(err, user){
      user.goals.push(new Goal(
        {body: req.body.body,
        goalPoints: req.body.goalPoints,
        deadline: req.body.deadline
         }))
      user.save(function(err){
        res.redirect(`/users/${user.id}`);
      });
    });
  });

//Show goals page //******** STILL IN PROGRESS
router.get('/:userId/edit/:id', function(req, res){
  // console.log(req.params._id);
  User.findById(req.params.userId, function(err, goal){
    // Goal.findById(req.params.id, function(err, goal){
  // User.findOne({_id:req.params.id}, function(err, goal){
    console.log("Goals"+ goal.goals["body"]);
    res.render('users/show', {user: goal});
  });
});

//working on edit single goals
// router.get('/:id/edit', function(req, res){
//   Goal.findOne(req.params.id, function(err, user){
//     res.redirect('/users/show', {user:user});
//   });
// });
// save goal edit
// router.put('/:id', function(req, res){
//   Goal.findByIdAndUpdate(req.params.id, {
//     body: req.body.body
//   }, {new:true}, function(err, goal){
//     res.render(`/users/${user.id}`);
//   });
// });

// Deleting goals from users page
router.delete('/:userId/goals/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      goals: {_id: req.params.id}
    }
  },function(err){
    res.redirect(`/users/${req.params.userId}`);
  });
});

//End of goals
//====================================================

//RECORDING USERS REWARDS
//=====================================================
//Creating and Saving new rewards on user's page
router.post('/:id/rewards', function(req, res){
  User.findById(req.params.id, function(err, user){
    user.rewards.push(new Reward(
      {bodyReward: req.body.bodyReward,
      rewardPoints: req.body.rewardPoints,
      achieved: req.body.achieved
       }))
    user.save(function(err){
      res.redirect(`/users/${user.id}`);
    });
  });
});

//Show goals page //******** STILL IN PROGRESS
// router.get('/:userId/edit/:id', function(req, res){
//   // console.log(req.params._id);
//   User.findById(req.params.userId, function(err, goal){
//     console.log("Goals"+ goal.goals["body"]);
//     res.render('users/show', {user: goal});
//   });
// });


//Deleting rewards from users page
router.delete('/:userId/rewards/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      rewards: {_id: req.params.id}
    }
  },function(err){
    res.redirect(`/users/${req.params.userId}`);
  });
});
//End of rewards
//=======================================================

//Authentication
var authenticate = function(req, res, next) {
  if (!req.user || req.user._id != req.params.id) {
      res.json({status: 401, message: 'unauthorized'})
  } else {
    next()
  }
}

//User page without Authentication (?)
router.get('/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      console.log(user); //*****************
      res.render('users/user', {user:user});
    });
});

module.exports = router;
