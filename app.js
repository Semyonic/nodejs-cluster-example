const path = require('path');
const express = require('express');
const crypto = require('crypto');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
//process.send({msg:'asds'});
module.exports = app;
