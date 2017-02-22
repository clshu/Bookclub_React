// get all dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const logger = require('morgan');
const models = require('./api/models');
const favicon = require('serve-favicon');
const passportService = require('./api/services/passport');
const passport = require('passport');
// By default passport use cookie and session is true, set it false here
const verifyToken = passport.authenticate('jwt', { session: false});
const verifyLogin = passport.authenticate('local', { session: false});
var flash    = require('connect-flash');

const auth = require('./api/routes/auth');
const feature = require('./api/routes/feature');
const events = require('./api/routes/events');
const members = require('./api/routes/members');
const posts = require('./api/routes/posts');
const books = require('./api/routes/books');
const rsvps = require('./api/routes/rsvps');
const uploadfile = require('./api/routes/upload');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));
// DB Setup
// {force:true} drops the table everytime the server starts.
models.sequelize.sync()

app.use(logger('dev'));

app.use('/api/uploadfile',uploadfile);
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json({ type: '*/*'}));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// override with POST having ?_method
app.use(methodOverride('_method'));


// middleware to log request to console
app.use(logger('combined'));
app.use(flash());
// Routes
app.use('/auth', auth);
app.use('/api/members', verifyToken, members);
app.use('/api/events', verifyToken, events);
app.use('/api/posts', verifyToken, posts);
app.use('/api/books', verifyToken, books);
app.use('/api/rsvps', verifyToken, rsvps);

// feature is for test purpose only
app.use('/feature', verifyToken, feature);
//app.use('/events', verifyToken, events);
//app.use('/members', verifyToken, members);
//app.use('/posts', verifyToken, posts);
//app.use('/ratings', verifyToken, ratings);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(PORT,function(){
	console.log('Server waiting for requests');
});
