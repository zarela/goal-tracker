var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqueValidator = require('mongoose-unique-validator'); //*****
// mongoose.Promise = global.Promise;

var goalSchema = require('./goal.js').schema;
var rewardSchema = require('./reward.js').schema;

var Schema = mongoose.Schema;

// var goalSchema = new Schema({
//   goalPoints:Number,
//   completed: Boolean,
//   deadline: Date,
//   body: String
// });
//
// var rewardSchema = new Schema({
//   rewardPoints: Number,
//   achieved: Boolean,
//   body: String
// });

var userSchema = new Schema({
  username: String,
  password: String,
  goals: [goalSchema],
  rewards:[rewardSchema],
  totalPoints: Number,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(uniqueValidator); //************
//goalSchema.plugin(passportLocalMongoose); //Maybe back
//rewardSchema.plugin(passportLocalMongoose); //Maybe back

var User = mongoose.model("User", userSchema);

module.exports = User;
