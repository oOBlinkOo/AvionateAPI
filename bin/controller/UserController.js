"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userDAO = require("../dao/UserDao");
// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');
// http://localhost:8100/
// var siteUrl = process.env.UI_URL || 'http://localhost:3000';
exports.router = express.Router();
// router.get('/login', function(req, res, next) {
//   console.log('llegamos hasta aqui');
//   // var userModel2:any= new UserModel();
//   var userModel2:any= new userModel.UserModel();
//   	userModel2.name='Miguel2'
//   	userModel2.password='Miguel222'
//   	// userModel.name='Miguel Angel';
//      res.statusCode = 200;
//      res.send(userModel2);
// });
exports.router.post('/login', function (req, res, next) {
    console.log('llegamos hasta aqui login');
    userDAO.checkCredentials(req.body.email, req.body.password).then(function (userModel) {
        if (userModel != null) {
            res.statusCode = 200;
            console.log(userModel);
            res.send(userModel);
        }
        else {
            res.statusCode = 200;
            res.send(false);
        }
    })
        .catch(function (error) {
        res.statusCode = 500;
        res.json(error);
    });
});
