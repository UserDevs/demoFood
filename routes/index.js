var express = require('express');
var path =require('path');
var router = express.Router();



router.get('/',function (req , res, next) {
    //res.send('index page');
    res.render('src/index.html');
    // res.sendFile(path.join(__dirname,'client')+'/src/index.html');

});


module.exports = router;