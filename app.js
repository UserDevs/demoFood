// /*eslint-env node*/
//
// //------------------------------------------------------------------------------
// // node.js starter application for Bluemix
// //------------------------------------------------------------------------------
//
// // This application uses express as its web server
// // for more info, see: http://expressjs.com
// var express = require('express');
// var path        = require('path');
// var morgan      = require('morgan');
// var bodyParser  = require('body-parser');
//
// var index = require('./routes/index');
// // cfenv provides access to your Cloud Foundry environment
// // for more info, see: https://www.npmjs.com/package/cfenv
// //var cfenv = require('cfenv');
//
// // create a new express server
// var app = express();
// // var rootPath = path.normalize(__dirname_+'/../');
// // serve the files out of ./public as our main files
// // app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'src')));    // folder where angular will be installed
// app.use(express.static(path.join(__dirname, 'client', 'src')));
// app.use(express.static(path.join(__dirname, 'client', 'src', 'app')));
//
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // log to console
// app.use(morgan('dev'));
//
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });// get the app environment from Cloud Foundry
// app.use('/', index);
// // var appEnv = cfenv.getAppEnv();
// // var appEnv = process.env.PORT||9000;
// var appEnv = 8080 ;
// // start server on the specified port and binding host
// app.listen(appEnv);
//     console.log("server starting on "+appEnv);
//
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');

var path        = require('path');
var port        = process.env.PORT || 9000;
var index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'client')));    // folder where angular will be installed
app.use(express.static(path.join(__dirname, 'client', 'src')));
app.use(express.static(path.join(__dirname, 'client', 'src', 'app')));
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// log to console
app.use(morgan('dev'));
// Enable requestt
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use('/', index);


app.listen(port);
console.log('There will be dragons: http://localhost:' + port);
