 /*
=============================================
; Title: baumann-exercise-5.3.js
; Author: Reva Baumann
; Date: 20 May 2019
; Modified by: Reva Baumann
; Description: Pug Templates
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 5.3
  15 May 2019

  Application started and listening on Port 8000

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 5.3"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the path to find views
var path = require('path');
// Declare the pug variable and import the module
var pug = require("pug");

var app = express();
app.set("views", path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// Route
app.get('/', function(req, res) {
    res.render('index', {
        message: 'Welcome to my Pug based homepage!'
    });
});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on Port 8080')
})
;
