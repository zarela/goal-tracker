var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqueValidator = require('mongoose-unique-validator'); //*****
// mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var rewardSchema = new Schema({
  rewardPoints: Number,
  achieved: Boolean,
  body: String
});




rewardSchema.plugin(passportLocalMongoose);
rewardSchema.plugin(uniqueValidator); //************
//goalSchema.plugin(passportLocalMongoose); //Maybe back
//rewardSchema.plugin(passportLocalMongoose); //Maybe back

var Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;
