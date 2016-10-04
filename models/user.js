var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
// mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var goalSchema = new Schema({
  goalPoints:Number,
  completed: Boolean,
  deadline: Date,
  body: String
});

var rewardSchema = new Schema({
  rewardPoints: Number,
  achieved: Boolean,
  body: String
});

var userSchema = new Schema({
  username: String,
  password: String,
  goals: [goalSchema],
  rewards:[rewardSchema],
  totalPoints: Number,
});


userSchema.plugin(passportLocalMongoose);
goalSchema.plugin(passportLocalMongoose);
rewardSchema.plugin(passportLocalMongoose);


var User = mongoose.model("User", userSchema);
module.exports = User;

// var UserModel = mongoose.model("User", userSchema);
// var GoalModel = mongoose.model("Goal", goalSchema);
// var RewardModel = mongoose.model("Reward", rewardSchema);

// module.exports = {
//   User: UserModel,
//   // Goal: GoalModel,
//   // Reward: RewardModel
// }
