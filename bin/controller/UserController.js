"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ErrorModel_1 = require("../model/ErrorModel");
var userDAO = require("../dao/UserDao");
// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');
// http://localhost:8100/
// var siteUrl = process.env.UI_URL || 'http://localhost:3000';
exports.router = express.Router();
exports.router.post('/login', function (req, res, next) {
    console.log('llegamos hasta aqui login');
    userDAO.checkCredentials(req.body.email, req.body.password).then(function (userModel) {
        console.log('sale de la funcion');
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "User not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
exports.router.post('/createAccount', function (req, res, next) {
    console.log('llegamos hasta aqui login');
    userDAO.createAccount(req.body.name, req.body.lastname, req.body.email, req.body.password).then(function (userModel) {
        console.log('sale de la funcion', userModel);
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "User not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
exports.router.get('/getUser/:id_user', function (req, res, next) {
    console.log('llegamos hasta el getlist del trip', req.params);
    // res.send(req.params);
    userDAO.getUser(req.params.id_user).then(function (userModel) {
        console.log('sale de la funcion', userModel);
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "user not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
exports.router.post('/createTarjeta', function (req, res, next) {
    console.log('llegamos hasta aqui crear tarjeta');
    userDAO.crearTarjeta(req.body.id_user, req.body.numeroTarjeta, req.body.vigencia, req.body.cvv).then(function (userModel) {
        console.log('sale de la funcion');
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "User not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
exports.router.get('/getTarjeta/:id_user', function (req, res, next) {
    console.log('llegamos hasta el getlist del trip', req.params);
    // res.send(req.params);
    userDAO.getTarjeta(req.params.id_user).then(function (userModel) {
        console.log('sale de la funcion', userModel);
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "Tarjeta Not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
exports.router.post('/updateUser', function (req, res, next) {
    console.log('llegamos hasta aqui login');
    userDAO.updateUser(req.body.id_user, req.body.name, req.body.lastname, req.body.password).then(function (userModel) {
        console.log('sale de la funcion');
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 404;
            var errorModel = new ErrorModel_1.ErrorModel();
            errorModel.code = "404";
            errorModel.message = "User not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
