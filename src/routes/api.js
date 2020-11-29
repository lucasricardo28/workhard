const express = require('express');
const routes = express.Router();

const AuthorizationController = require('../Controllers/AuthorizationController');
//const ChangePasswordController = require('../Controllers/ChangePasswordController');
//const TrainController = require('../Controllers/TrainController');

routes.post('/login', AuthorizationController.login);
//routes.post('/change/password', ChangePasswordController.newPassword);

//routes.get('/trains', TrainController.index);
//routes.post('/trains', TrainController.store);
//routes.put('/trains/:train', TrainController.update);
//routes.get('/trains/:train', TrainController.show);
//routes.delete('/trains/:train', TrainController.destroy);
//routes.get('/trains/:day', TrainController.destroy);

module.exports = routes;