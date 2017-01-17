var express = require('express');
var path = require("path");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('./app/api/models/db');

//routes
var index = require("./app/client/routes/indexRoute");
var api = require("./app/api/routes/apiRoute");
var chat = require("./app/chat/routes/route");
// view engine setup
app.set('views', path.join(__dirname, 'app/client/views'));
app.set('view engine', 'jade');



app.use("/", index);
app.use("/api", api);

app.use('/chat', chat);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on '+ process.env.PORT);
});

