//get packages
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

//configure public assets folder
app.use(express.static(__dirname + '/public'));

//set up index route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//start server

app.listen(port);
console.log('Magic happens at http://' + port);