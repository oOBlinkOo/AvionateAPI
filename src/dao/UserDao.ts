import * as db from '../services/dbProvider';
// import * as Translator from '../translator/UserTranslator'
// var passwordHash = require('password-hash');
// var uuid = require('uuid');

export function checkCredentials (email: string , password:string){

    var params = { email:email.toLowerCase() };
    var query :string = null;
 query = 'select * from heroku_77555f6c6fe7654.usuarios where ?';
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
    // return 'ya please';
}

