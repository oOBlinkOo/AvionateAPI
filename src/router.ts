import * as UserController from './controller/UserController';
import * as TripController from './controller/TripController';


import express = require('express');

export function defineRoutes(app: express.Application) {
  app.use('/user', UserController.router);
  app.use('/trip', TripController.router);

}