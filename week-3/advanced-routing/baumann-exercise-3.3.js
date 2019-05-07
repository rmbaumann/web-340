 /*
=============================================
; Title: baumann-exercise-3.3.js
; Author: Reva Baumann
; Date: 06 May 2019
; Modified by: Reva Baumann
; Description: Advanced Routing
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 3.3
  29 April 2019
  Expected output
  Application started and listening on port 8080

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.3"));
console.log("") // Line Break

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/:productId', function(req, res) {
    var productId = parseInt(req.params.productId, 10);

    res.render('index', {
        productId: productId
    });
});

http.createServer(app).listen(8080, function(){
    console.log('Application started and listening on port %s', 8080);
});
