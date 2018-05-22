"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var Promise = require('promise');
var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b65a95432091c9',
    password: '8c364631'
    // database: 'heroku_77555f6c6fe7654'
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'viajes'
});
function run2(query, params) {
    console.log('cauntas conexiones pasan?');
    //   connection= mysql.createConnection({
    //   host: 'us-cdbr-iron-east-04.cleardb.net',
    //   user: 'b8aa64b5fea4e4',
    //   password: '4e42143e',
    //   database: 'heroku_5addddbb07eeeed'
    //   // host: 'localhost',
    //   // user: 'root',
    //   // password: '',
    //   // database: 'gymbd'
    // })
    // connection.connect();
    return new Promise(function (fulfill, reject) {
        console.log('entro el promise');
        pool.getConnection(function (err, connection) {
            console.log('que tira esta basura', connection.format(query, params));
            connection.query(query, params, function (err, rows, fields) {
                if (err) {
                    console.error('error connecting: ' + err.stack);
                    // throw err;
                    connection.release();
                    console.log('3');
                    return reject(err);
                }
                console.log('2');
                connection.release();
                // console.log('rowsrows',rows,err,fields);
                fulfill(rows);
            }); //done
        });
        console.log('termino el promise');
    });
}
exports.run2 = run2;
function killPool() {
    return new Promise(function (fulfill, reject) {
        pool.end(function (err) {
            console.log('kill Pools ', err);
        });
    });
}
exports.killPool = killPool;
