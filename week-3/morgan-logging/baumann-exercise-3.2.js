 /*
=============================================
; Title: baumann-exercise-3.2.js
; Author: Reva Baumann
; Date: 06 May 2019
; Modified by: Reva Baumann
; Description: The Logging Example
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 3.2
  29 April 2019
  Expected output
  Application started and listening on port 8080

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.2"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");

// Declare the http vairable and import the http module
var http = require("http");

// Declare the path variable and import the path module
var path = require("path");

// Declare the logger variable and import the Morgan Logging module
var logger = require('morgan');

//Declare the app variable and call express function
var app = express();

//Call Express set function to use views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get('/', function(req, res) {
    res.render('index', {
        message: "Wonder Woman is the best super-hero."
    });
});

http.createServer(app).listen(8080, function () {
    console.log('Application started and listening on port %s', 8080);
});

// End Program
