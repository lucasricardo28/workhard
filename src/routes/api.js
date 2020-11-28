const express = require('express');
const routes = express.Router();
const Authorization = require('./src/Controllers/Authorization');

routes.post('/login', Authorization.login);

module.exports = routes;