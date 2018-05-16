"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = require("./controller/UserController");
var TripController = require("./controller/TripController");
function defineRoutes(app) {
    app.use('/user', UserController.router);
    app.use('/trip', TripController.router);
}
exports.defineRoutes = defineRoutes;
