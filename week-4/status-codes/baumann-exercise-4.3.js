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


app.use(logger("dev"));

// Call function 404 status - not found
app.get("/not-found", function(request, respond) {
  response.status(404);
  response.json({
    error: "Resource not found."
  });
});

// Call function 200 status - correctly loaded page
app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Page loaded correctly."
  });
});

// Call function 501 status - not implemented
app.get("/not-implemented", function(request, respond) {
  response.status(501);
  response.json({
    error: "Page not implemented."
  });
});

// use console.log to start listening on port 8080, success message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080! Woohoo!");
});
