var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
