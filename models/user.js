var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // goals: [goalSchema],
  // rewards:[rewardSchema],
  totalPoints: Number,
  // history: (accomplishments)
})

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", userSchema);
module.exports = User;
