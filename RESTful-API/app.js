const express = require('express');
const app = express();
const db = require('./db');

let UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;