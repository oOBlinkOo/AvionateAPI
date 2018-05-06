import * as express from 'express';
// import * as userDAO from '../dao/UserDao';
// import  {UserModel} from '../model/UserModel';
import   * as  userModel  from '../model/UserModel';
import   {ErrorModel}  from '../model/ErrorModel';
import * as userDAO from '../dao/UserDao';

// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');
// http://localhost:8100/
// var siteUrl = process.env.UI_URL || 'http://localhost:3000';
export var router:express.Router = express.Router();


router.post('/login', function(req, res, next) {
  console.log('llegamos hasta aqui login');
  userDAO.checkCredentials(req.body.email,req.body.password).then(function(userModel:userModel.UserModel){
  	console.log('sale de la funcion');
      if(userModel != null)
      {
         
          res.statusCode = 200;
          console.log(userModel);
          res.send(userModel);
      }
      else{  
          res.statusCode = 404;
          var errorModel= new ErrorModel();
          errorModel.code="404";
          errorModel.message="User not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});