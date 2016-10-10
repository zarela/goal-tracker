var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqueValidator = require('mongoose-unique-validator'); //*****
// mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var goalSchema = new Schema({
  goalPoints:Number,
  completed: Boolean,
  deadline: Date,
  body: String
});

goalSchema.plugin(passportLocalMongoose);
goalSchema.plugin(uniqueValidator); //************
//goalSchema.plugin(passportLocalMongoose); //Maybe back
//rewardSchema.plugin(passportLocalMongoose); //Maybe back


var Goal = mongoose.model("Goal", goalSchema);



module.exports = Goal;
