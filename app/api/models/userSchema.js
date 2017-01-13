var mongoose = require("mongoose");


var userSchema = mongoose.Schema({
   username: String,
   password: String
})

var User = mongoose.Model('User', userSchema);