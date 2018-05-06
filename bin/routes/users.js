var express = require('express');
var router = express.Router();
var userDao = require('../dao/UserDao');
/* GET users listing. */
router.get('/login', function (req, res, next) {
    console.log('funciona el login?');
    // res.send('respond with a resource');
});
module.exports = router;
