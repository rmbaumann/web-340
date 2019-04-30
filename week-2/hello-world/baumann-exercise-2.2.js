/*
=============================================
; Title: baumann-exercise-2.2.js
; Author: Reva Baumann
; Date: 29 April 2019
; Modified by: Reva Baumann
; Description: Recreate the Hello World example
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 2.2
  29 April 2019
  Expected output

*/


// Start Program


// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 2.2"));
console.log("") // Line Break

// Declare the express variable and import the module
var express = require("express");

// Declare the http variable and import the module
var http = require("http");

// Declare the app variable and call the express function to start Express
var app = express();

// Response of Hello World for any URL
app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

// Call the createServer and listen for a request on port 8080
http.createServer(app).listen(8080);

// end program
