"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ErrorModel_1 = require("../model/ErrorModel");
var tripDao = require("../dao/TripDao");
// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');
// http://localhost:8100/
// var siteUrl = process.env.UI_URL || 'http://localhost:3000';
exports.router = express.Router();
exports.router.post('/create', function (req, res, next) {
    console.log('llegamos hasta el create del trip');
    console.log('GG', req.body.destinolat);
    console.log('GG', req.body.destinolng);
    tripDao.createTrip(req.body.id_user, req.body.source, req.body.destino, req.body.sourcelat, req.body.sourcelng, req.body.destinolat, req.body.destinolng, req.body.asientos, req.body.fecha, req.body.status, req.body.precio, req.body.precioComision, req.body.primerpick, req.body.segundopick).then(function (userModel) {
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
exports.router.get('/getList/:source/:destino/:start/:end/:plaza', function (req, res, next) {
    console.log('llegamos hasta el getlist del trip', req.params);
    // res.send(req.params);
    tripDao.getList(req.params.source, req.params.destino, req.params.start, req.params.end, req.params.plaza).then(function (userModel) {
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
            errorModel.message = "Trip not Found";
            res.send(errorModel);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        console.log(error);
        res.json(error);
    });
});
