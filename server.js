// get all dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var logger = require('morgan');
var favicon = require('serve-favicon');
//var events = require('./api/routes/events.js');


var PORT = process.env.PORT || 3000;
var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false 
}));

app.use(bodyParser.json());

app.use(express.static('public'));// override with POST having ?_method
app.use(methodOverride('_method'));


// middleware to log request to console
app.use(logger('combined'));


//app.use('/events',events);
// Routes
app.get(`*`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(PORT,function(){
	console.log('Server waiting for requests at PORT ' + PORT);
});