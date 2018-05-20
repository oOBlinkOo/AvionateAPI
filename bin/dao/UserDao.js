"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../services/dbProvider");
// import * as Translator from '../translator/UserTranslator'
// var passwordHash = require('password-hash');
// var uuid = require('uuid');
var ErrorModel_1 = require("../model/ErrorModel");
function checkCredentials(email, password) {
    var params = { email: email.toLowerCase() };
    var query = null;
    // query = 'select * from heroku_77555f6c6fe7654.usuarios where ?';
    query = 'select * from usuarios where ?';
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('ya porfavor ', result);
        if (result[0].password != password) {
            return null;
        }
        else {
            return result;
        }
    })
        .catch(function (err) {
        console.log('hubo error user dao login catch');
        console.log(err);
    });
}
exports.checkCredentials = checkCredentials;
function createAccount(name, lastname, email, password) {
    var member_active = 0;
    var params = [
        name,
        lastname,
        password,
        member_active,
        email.toLowerCase(),
    ];
    var query = null;
    // INSERT INTO `usuarios` (`id_user`, `name`, `apellido`, `password`, `member_active`, `email`) VALUES (NULL, 'test', 'test', 'test', '1', 'test@gmail.com');
    query = 'INSERT INTO `usuarios` (`id_user`, `name`, `lastname`, `password`, `member_active`, `email`)';
    query = query + 'VALUES  (null,?,?,?,?,?)';
    console.log("NO ENTIENDO", query);
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('result create ACcount', result);
        if (result != null) {
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el crear account');
        // console.log(err);
        // var error= new ErrorModel();
        // error.code="409";
        // error.message="hubo error en el crear account";
        // return error;
    });
}
exports.createAccount = createAccount;
function getUser(user_id) {
    console.log('llegamos al dao de getList1', user_id);
    // console.log('llegamos al dao de getList2',destino);
    // console.log('llegamos al dao de getList3',timestart);
    // console.log('llegamos al dao de getList4',tiemeend);
    // SELECT * FROM `trip` WHERE 1
    var params = [
        user_id
    ];
    var query = null;
    query = 'SELECT * FROM `usuarios` WHERE ';
    query = query + "id_user =?";
    return db.run2(query, params).then(function (result) {
        console.log('result create trip', result);
        if (result != null) {
            console.log('el id es !!', result);
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el get list trip');
    });
}
exports.getUser = getUser;
function crearTarjeta(id_user, numeroTarjeta, vigencia, cvv) {
    var params = [
        id_user,
        numeroTarjeta,
        vigencia,
        cvv
    ];
    var query = null;
    query = 'INSERT INTO `tarjeta` (`id_tarjeta`, `id_user`, `number_tarjeta`, `date_vigencia`, `cvv`)';
    query = query + 'VALUES  (null,?,?,?,?)';
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('ya porfavor ', result);
        if (result != null) {
            console.log('el id es !!', result);
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el create tarjeta');
        console.log(err);
    });
}
exports.crearTarjeta = crearTarjeta;
function getTarjeta(user_id) {
    var params = [
        user_id
    ];
    var query = null;
    query = 'SELECT * FROM `tarjeta` WHERE ';
    query = query + "id_user =?";
    return db.run2(query, params).then(function (result) {
        console.log('result create trip', result);
        if (result != null) {
            console.log('el id es !!', result);
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el get list trip');
    });
}
exports.getTarjeta = getTarjeta;
function updateUser(id_user, name, lastname, pass) {
    var params = [
        name,
        lastname,
        pass,
        id_user
    ];
    var query = null;
    // query = 'select * from heroku_77555f6c6fe7654.usuarios where ?';
    query = 'UPDATE usuarios set name = ? , lastname = ? , password = ? where id_user = ? ';
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('ya porfavor ', result);
        return result;
    })
        .catch(function (err) {
        console.log('hubo error user dao login catch');
        console.log(err);
    });
}
exports.updateUser = updateUser;
function activarCuenta(id_user, flag) {
    var params = [
        flag,
        id_user
    ];
    var query = null;
    // query = 'select * from heroku_77555f6c6fe7654.usuarios where ?';
    query = 'UPDATE usuarios set member_active = ? where id_user = ? ';
    console.log(query, params);
    return db.run2(query, params).then(function (result) {
        console.log('ya porfavor ', result);
        return result;
    })
        .catch(function (err) {
        console.log('hubo error user dao login catch');
        console.log(err);
    });
}
exports.activarCuenta = activarCuenta;
function deleteTarjeta(user_id) {
    console.log('llegamos al dao de getList1', user_id);
    var params = [
        user_id
    ];
    var query = null;
    query = 'DELETE FROM `tarjeta` WHERE ';
    query = query + "id_user =?";
    return db.run2(query, params).then(function (result) {
        console.log('result create trip', result);
        if (result != null) {
            console.log('el id es !!', result);
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el get list trip');
    });
}
exports.deleteTarjeta = deleteTarjeta;
function getPicks(id_pick) {
    var params = [
        id_pick
    ];
    var query = null;
    query = 'SELECT * FROM `pickup` WHERE ';
    query = query + "id_trip =?";
    return db.run2(query, params).then(function (result) {
        console.log('result create trip', result);
        if (result != null) {
            console.log('el id es !!', result);
            return result;
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el get list trip');
    });
}
exports.getPicks = getPicks;
function reservar(id_trip, id_user, id_pick, plaza, plazaUsuario) {
    var query = null;
    query = 'SELECT * FROM `viajesporuser` WHERE ';
    query = query + "id_trip =? and status = ?";
    var status = 'OPEN';
    var params = [
        id_trip,
        status
    ];
    return db.run2(query, params).then(function (result) {
        console.log('consultamos si existen datos o no', result);
        if (result.length == 0) {
            console.log('esta vacio');
            var params2 = [
                id_trip,
                id_user,
                id_pick,
                status,
                plazaUsuario
            ];
            var query2 = null;
            query2 = 'INSERT INTO `viajesporuser` (`id`, `id_trip`, `id_user`, `id_pick`, `status` ,`plazaOcupada`)';
            query2 = query2 + 'VALUES  (null,?,?,?,?,?)';
            console.log('esta vacio2');
            return db.run2(query2, params2).then(function (result) {
                console.log('esta vacio3');
                return result;
            })
                .catch(function (err) {
                console.log('hubo error en el get 1 list trip');
            });
        }
        else {
            console.log('ya veremos luego', result);
            for (var i = 0; i < result.length; ++i) {
                if (result[i].id_user == id_user) {
                    var object = new ErrorModel_1.ErrorModel();
                    object.code = '409';
                    object.message = 'Usuario ya registrado a ese viaje';
                    return object;
                }
            }
            if (result.length == plaza) {
                var object = new ErrorModel_1.ErrorModel();
                object.code = '409';
                object.message = 'Auto Lleno busca otro';
                return object;
            }
            var params3 = [
                id_trip,
                id_user,
                id_pick,
                status,
                plazaUsuario
            ];
            var query3 = null;
            query3 = 'INSERT INTO `viajesporuser` (`id`, `id_trip`, `id_user`, `id_pick`, `status` ,`plazaOcupada`)';
            query3 = query3 + 'VALUES  (null,?,?,?,?,?)';
            return db.run2(query3, params3).then(function (result) {
                return result;
            })
                .catch(function (err) {
                console.log('hubo error en el proceso');
            });
        }
    })
        .catch(function (err) {
        console.log('hubo error en el reservar ');
    });
}
exports.reservar = reservar;
