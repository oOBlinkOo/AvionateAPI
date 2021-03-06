"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../services/dbProvider");
var global = 'heroku_77555f6c6fe7654.';
function createTrip(id_user, source, destino, sourcelat, sourcelng, destinolat, destinolng, asientos, fecha, status, precio, precioComision, primerpick, segundopick) {
    var testDate = new Date(fecha);
    console.log('FECHAPLZ3', fecha);
    // console.log('FECHAPLZ',givemeFormatDate(testDate).toString());
    var params = [
        id_user,
        source,
        destino,
        sourcelat,
        sourcelng,
        destinolat,
        destinolng,
        asientos,
        fecha,
        status,
        precio,
        precioComision
    ];
    var query = null;
    query = 'INSERT INTO ' + global + '`trip`(`id_trip`, `id_user`, `source`, `destino`, `sourcePlaceLat`, `destinoPlaceLat`, `sourcePlaceLng`, `destinoPlaceLng`, `plaza`, `hora`, `status`, `costo`, `costoComision`)';
    query = query + 'VALUES  (null,?,?,?,?,?,?,?,?,?,?,?,?)';
    //     var query2 :string = null;
    // query2 = 'INSERT INTO `pickup`(`id_pick`, `id_trip`, `localization`) ';
    // query2 = query2 + 'VALUES  (null,?,?,?,?,?,?,?,?,?,?,?,?)' ;
    console.log("NO ENTIENDO", query);
    console.log(query, params);
    //  console.log ("NO ENTIENDO",query2);
    // console.log (query2,params);
    return db.run2(query, params).then(function (result) {
        console.log('result create trip', result);
        if (result != null) {
            console.log('el id es del trip!!', result);
            return pickup(primerpick, segundopick, result);
        }
        else {
            return null;
        }
    })
        .catch(function (err) {
        console.log('hubo error en el crear trip');
    });
}
exports.createTrip = createTrip;
function pickup(primerpick, segundopick, resultInitial) {
    console.log('prueba de pick up !!!!' + resultInitial);
    console.log('prueba de pick up !!!!' + resultInitial.insertId);
    for (var i = 0; i < 2; ++i) {
        console.log('prueba de pick up gg', i);
        var query2 = null;
        query2 = 'INSERT INTO ' + global + '`pickup`(`id_pick`, `id_trip`, `localization`) ';
        query2 = query2 + 'VALUES  (null,?,?)';
        var parameterToinsert = null;
        if (i == 0) {
            parameterToinsert = primerpick;
        }
        else {
            parameterToinsert = segundopick;
        }
        var params2 = [
            resultInitial.insertId,
            parameterToinsert
        ];
        db.run2(query2, params2).then(function (result) {
            console.log('result create trip', result);
            if (result != null) {
                console.log('el id del pick up!!', result.insertId);
                console.log('el id del pick up!!', result);
            }
            else {
                return ("error en el pick up");
            }
        })
            .catch(function (err) {
            console.log('hubo error en el crear pick ups trip');
        });
    }
    return resultInitial;
}
// req.body.source,
//                req.body.destino,
//                req.body.timestart,
//                req.body.tiemeend
function getList(source, destino, timestart, tiemeend, plaza) {
    // SELECT * FROM `trip` WHERE 1
    var params = [
        source,
        destino,
        tiemeend,
        timestart
    ];
    var arraytoReturn = [];
    var query = null;
    query = 'SELECT * FROM ' + global + '`trip` WHERE ';
    // query = query+"source=? and destino = ? and status='OPEN' and hora< ? and hora> ? and plaza = ?";
    query = query + "source=? and destino = ? and status='OPEN' and hora< ? and hora> ? ";
    return db.run2(query, params).then(function (result) {
        return result;
        // console.log ('result create trip',result);
        // var x = new ErrorModel();
        // // x.message='test';
        // // x.code='no';
        // // return x;
        //     return continuefunction(result,plaza);
    })
        .catch(function (err) {
        console.log('hubo error en el get list 1 trip');
    });
}
exports.getList = getList;
function getListByUser(id_user) {
    // SELECT * FROM `trip` WHERE 1
    var params = [
        id_user,
        "OPEN"
    ];
    var arraytoReturn = [];
    var query = null;
    query = 'SELECT * FROM ' + global + '`trip` WHERE ';
    query = query + "id_user = ? and status = ?";
    return db.run2(query, params).then(function (result) {
        return result;
    })
        .catch(function (err) {
        console.log('hubo error en el get list 1 trip');
    });
}
exports.getListByUser = getListByUser;
function getFullCar(id_trip) {
    // SELECT * FROM `trip` WHERE 1
    var params = [
        id_trip,
        "OPEN"
    ];
    var arraytoReturn = [];
    var query3 = null;
    query3 = 'SELECT * FROM ' + global + '`viajesporuser` WHERE ';
    query3 = query3 + "id_trip =? and status = ?";
    return db.run2(query3, params).then(function (result) {
        return result;
    })
        .catch(function (err) {
        console.log('hubo error en el get list 1 trip');
    });
}
exports.getFullCar = getFullCar;
function closeTrip(id_trip) {
    // query = 'UPDATE usuarios set name = ? , lastname = ? , password = ? where id_user = ? ';
    // SELECT * FROM `trip` WHERE 1
    var params = [
        id_trip,
    ];
    var arraytoReturn = [];
    var query3 = null;
    query3 = "UPDATE  " + global + "trip set status = 'CLOSE' WHERE id_trip = ?";
    return db.run2(query3, params).then(function (result) {
        return result;
    })
        .catch(function (err) {
        console.log('hubo error en el get list 1 trip');
    });
}
exports.closeTrip = closeTrip;
