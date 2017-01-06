var express = require("express");
var path =require("path");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/client/views'));
app.set('view engine', 'jade');


app.get("/", function(req, res){
    res.render("index",{title: "CHATAPP"});
});


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
   
    console.log("Serwer start's");
    
});