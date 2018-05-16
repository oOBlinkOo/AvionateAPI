import * as express from 'express';
// import * as userDAO from '../dao/UserDao';
// import  {UserModel} from '../model/UserModel';
import   * as  userModel  from '../model/UserModel';
import   {ErrorModel}  from '../model/ErrorModel';
import * as tripDao from '../dao/TripDao';

// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');
// http://localhost:8100/
// var siteUrl = process.env.UI_URL || 'http://localhost:3000';
export var router:express.Router = express.Router();



router.post('/create', function(req, res, next) {
  console.log('llegamos hasta el create del trip');
  console.log('GG',req.body.destinolat);
  console.log('GG',req.body.destinolng);
  tripDao.createTrip(
                req.body.id_user,
                req.body.source,
                req.body.destino,
                req.body.sourcelat,
                req.body.sourcelng,
                req.body.destinolat,
                req.body.destinolng,
                req.body.asientos,
                req.body.fecha,
                req.body.status,
                req.body.precio,
                req.body.precioComision,
                req.body.primerpick,
                req.body.segundopick


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



router.get('/getList/:source/:destino/:start/:end/:plaza', function(req, res, next) {
  console.log('llegamos hasta el getlist del trip',req.params);
  
// res.send(req.params);
  tripDao.getList(
                req.params.source,
                req.params.destino,
                req.params.start,
                req.params.end,
                req.params.plaza
       

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
          errorModel.message="Trip not Found";
          res.send(errorModel);
      }
  })
    .catch(error => {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    });


});