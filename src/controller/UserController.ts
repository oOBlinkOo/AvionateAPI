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

router.post('/createAccount', function(req, res, next) {
  console.log('llegamos hasta aqui login');
  userDAO.createAccount(req.body.name,req.body.lastname,req.body.email,req.body.password).then(function(userModel:any){
    console.log('sale de la funcion',userModel);
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

router.get('/getUser/:id_user', function(req, res, next) {
  console.log('llegamos hasta el getlist del trip',req.params);
  
// res.send(req.params);
  userDAO.getUser(
                req.params.id_user                     

    ).then(function(userModel:any){
    console.log('sale de la funcion',userModel);
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
          errorModel.message="user not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});


router.post('/createTarjeta', function(req, res, next) {
  console.log('llegamos hasta aqui crear tarjeta');
  userDAO.crearTarjeta(
    req.body.id_user,
    req.body.numeroTarjeta,
    req.body.vigencia,
    req.body.cvv
    ).then(function(userModel:userModel.UserModel){
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

router.get('/getTarjeta/:id_user', function(req, res, next) {
  console.log('llegamos hasta el getlist del trip',req.params);
  
// res.send(req.params);
  userDAO.getTarjeta(
                req.params.id_user                     

    ).then(function(userModel:any){
    console.log('sale de la funcion',userModel);
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
          errorModel.message="Tarjeta Not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});

router.post('/updateUser', function(req, res, next) {
  console.log('llegamos hasta aqui login');
  userDAO.updateUser(req.body.id_user,req.body.name,req.body.lastname,req.body.password).then(function(userModel:userModel.UserModel){
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

router.post('/activarCuenta', function(req, res, next) {
  console.log('llegamos hasta aqui login');
  userDAO.activarCuenta(req.body.id_user,req.body.active).then(function(userModel:userModel.UserModel){
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


router.get('/deleteCards/:id_user', function(req, res, next) {
  console.log('llegamos hasta el delete CARDS',req.params);
  
// res.send(req.params);
  userDAO.deleteTarjeta(
                req.params.id_user                     

    ).then(function(userModel:any){
    console.log('sale de la funcion',userModel);
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
          errorModel.message="Tarjeta Not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});

router.get('/getPicks/:id_pick', function(req, res, next) {
  console.log('llegamos hasta el getlist del trip',req.params);
  
// res.send(req.params);
  userDAO.getPicks(
                req.params.id_pick                     

    ).then(function(userModel:any){
    console.log('sale de la funcion',userModel);
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
          errorModel.message="Picks Not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});


router.post('/reservar', function(req, res, next) {
  userDAO.reservar(req.body.id_trip,req.body.id_user,req.body.id_pick,req.body.plaza,req.body.plazaUsuario).then(function(userModel:userModel.UserModel){
    console.log('sale de la funcion');
      if(userModel != null)
      {
         
          res.statusCode = 200;
          console.log('respuesta con 200',userModel);
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

