/*
============================================
; Title:  baumann-exercise-2.2.js
; Author: Reva Baumann
; Date:   29 February 2019
; Description: Created a Node.js server
;===========================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 2.2
  29 April 2019
  Expected output

*/


// Start Program

// Declare the Express variable and import Express
var express = require("express");

// Declare the HTTP variable and import HTTP Module
var http = require("http");

// Declare the App Variable and call Express to start an application instance
var app = express();

//Express passing a function for request and response
app.use(function(request, response){
  console.log("In comes a request to: " + request.url);
  // Closed response
  response.end("Hello World");
});

// Call createServer to listen for a request on port 8080
http.createServer(app).listen (8080);

//end program
