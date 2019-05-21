 /*
=============================================
; Title: baumann-exercise-5.2.js
; Author: Reva Baumann
; Date: 20 May 2019
; Modified by: Reva Baumann
; Description: Application Started and Listening on Port 3000!
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 5.2
  15 May 2019

  Expected output
  Application Started and Listening on Port 3000!


*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 5.2"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the path to find views
var path = require('path');

// App functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// In memory data, local composer array
var composers = [
  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"
];

// Routes
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });
});

// Create Server
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on Port 3000!')
});
