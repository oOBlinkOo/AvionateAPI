"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../services/dbProvider");
// import * as Translator from '../translator/UserTranslator'
// var passwordHash = require('password-hash');
// var uuid = require('uuid');
function checkCredentials(email, password) {
    var params = { email: email.toLowerCase() };
    var query = null;
    query = 'select * from usuarios where ?';
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('ya porfavor ', result);
        return result;
    })
        .catch(function (err) {
        console.log('hubo error user dao login catch');
        console.log(err);
    });
    // return 'ya please';
}
exports.checkCredentials = checkCredentials;
