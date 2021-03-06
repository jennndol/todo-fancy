require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB);

const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');

const isLoggedin = require('./middlewares/auth');
const isUser = require('./middlewares/user');

const index = require('./routes/index');
const todo = require('./routes/todo');
const auth = require('./routes/auth');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/todos', isLoggedin, isUser, todo);
app.use('/auth', auth);
app.use('/users', isLoggedin, isUser, user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
