 /*
=============================================
; Title: baumann-exercise-4.3.js
; Author: Reva Baumann
; Date: 14 May 2019
; Modified by: Reva Baumann
; Description: Application started on port 8080! Woohoo!
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 4.3
  14 May 2019
  Expected output


*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 4.3"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the logger variable and import
var logger = require("morgan");

// Sets the app to express
var app = express();

var express = require("express");
var http = require("http");

var app = express();

// Outputs a message using GET Response
app.get("/", function(request, response) {

  response.send("Invoked a GET request.");
});

// Outputs a message for the PUT response
app.put("/", function(request, response) {

  response.send("Invoked a PUT request.");
});

// Outputs a message for the post response
app.post("/", function(request, response) {

  response.send("Invoked a POST request.");
});

// Outputs a message for the delete response
app.delete("/", function(request, response) {

  response.send("Invoked a DELETE request.");
});

// Creates an HTTP server and outputs a message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
