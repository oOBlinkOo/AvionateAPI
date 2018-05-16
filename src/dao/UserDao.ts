  import * as db from '../services/dbProvider';
  // import * as Translator from '../translator/UserTranslator'
  // var passwordHash = require('password-hash');
  // var uuid = require('uuid');
  import {ErrorModel} from '../model/ErrorModel';

  export function checkCredentials (email: string , password:string){

      var params = { email:email.toLowerCase() };
      var query :string = null;
   // query = 'select * from heroku_77555f6c6fe7654.usuarios where ?';
   query = 'select * from usuarios where ?';
    console.log (query,params);
   
    return db.run2(query,params).then(result => {
      console.log ('ya porfavor ',result);
      if(result[0].password!=password){
        return null;
      }else {
        return result;  
      }    
      })
      .catch(function (err) {
        console.log ('hubo error user dao login catch');
        console.log(err);
      });
  }


export function createAccount (name:string,lastname:string,email: string , password:string){
      var member_active=0;
      var params = [
            name,
            lastname,
            password,
            member_active,
            email.toLowerCase(),
            
       ];
      var query :string = null;
   // INSERT INTO `usuarios` (`id_user`, `name`, `apellido`, `password`, `member_active`, `email`) VALUES (NULL, 'test', 'test', 'test', '1', 'test@gmail.com');
   query = 'INSERT INTO `usuarios` (`id_user`, `name`, `lastname`, `password`, `member_active`, `email`)';
   query = query + 'VALUES  (null,?,?,?,?,?)' ;

   console.log ("NO ENTIENDO",query);
    console.log (query,params);
   
    return db.run2(query,params).then(result => {
      console.log ('result create ACcount',result);
     if(result != null){
       return result;
     }else {
       return null;
     }
      })
      .catch(function (err) {

        console.log ('hubo error en el crear account');
        // console.log(err);
        // var error= new ErrorModel();
        // error.code="409";
        // error.message="hubo error en el crear account";

        // return error;
      });
  }

  export function  getUser(user_id:string){
  console.log('llegamos al dao de getList1',user_id);
  // console.log('llegamos al dao de getList2',destino);
  // console.log('llegamos al dao de getList3',timestart);
  // console.log('llegamos al dao de getList4',tiemeend);
  
// SELECT * FROM `trip` WHERE 1
 var params = [
            user_id
            
       ];
var query :string = null;
   query = 'SELECT * FROM `usuarios` WHERE ';
   query = query+"id_user =?";
  return db.run2(query,params).then(result => {
      console.log ('result create trip',result);
     if(result != null){
       console.log('el id es !!',result);
       return result;
     }else {
       return null;
     }
      })
      .catch(function (err) {
        console.log ('hubo error en el get list trip');
      });

}
