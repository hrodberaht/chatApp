var model = require("../models/userSchema");




module.exports = function(req, res){
    var a = req.body.username;
    
    console.log(a);
    model.find(function(err, users){
        if(err) console.log(err); 
        return res.send(users);
    });
};