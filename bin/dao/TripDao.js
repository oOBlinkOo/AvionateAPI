"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../services/dbProvider");
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
    query = 'INSERT INTO `trip`(`id_trip`, `id_user`, `source`, `destino`, `sourcePlaceLat`, `destinoPlaceLat`, `sourcePlaceLng`, `destinoPlaceLng`, `plaza`, `hora`, `status`, `costo`, `costoComision`)';
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
//   function givemeFormatDate(newDate:Date){
//   var formatDateCorrect:string=null;
//     newDate.getDate();
//   newDate.getMonth();
//   newDate.getFullYear();
//   newDate.getHours();
//   newDate.getMinutes();
//   console.log('MUEREEEEEEEEE'+newDate.getFullYear());
//   console.log('MUEREEEEEEEEE'+newDate.getMonth());
//   console.log('MUEREEEEEEEEE'+newDate.getDate());
//   console.log('MUEREEEEEEEEE'+newDate.getHours());
//   console.log('MUEREEEEEEEEE'+newDate.getMinutes());
//   formatDateCorrect=newDate.getFullYear()+'-'+newDate.getMonth()+'-'+newDate.getDate()+' '+
//         newDate.getHours()+':'+newDate.getMinutes()+':'+newDate.getSeconds();
//         console.log('nuevo formato del date',formatDateCorrect);
//     return formatDateCorrect.toString();
// }
function pickup(primerpick, segundopick, resultInitial) {
    console.log('prueba de pick up !!!!' + resultInitial);
    console.log('prueba de pick up !!!!' + resultInitial.insertId);
    for (var i = 0; i < 2; ++i) {
        console.log('prueba de pick up gg', i);
        var query2 = null;
        query2 = 'INSERT INTO `pickup`(`id_pick`, `id_trip`, `localization`) ';
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
    console.log('llegamos al dao de getList1', source);
    console.log('llegamos al dao de getList2', destino);
    console.log('llegamos al dao de getList3', timestart);
    console.log('llegamos al dao de getList4', tiemeend);
    // SELECT * FROM `trip` WHERE 1
    var params = [
        source,
        destino,
        tiemeend,
        timestart,
        plaza
    ];
    var query = null;
    query = 'SELECT * FROM `trip` WHERE ';
    query = query + "source=? and destino = ? and status='OPEN' and hora< ? and hora> ? and plaza = ?";
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
exports.getList = getList;
