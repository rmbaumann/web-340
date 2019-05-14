 /*
=============================================
; Title: baumann-exercise-4.2.js
; Author: Reva Baumann
; Date: 14 May 2019
; Modified by: Reva Baumann
; Description: JSON API Example
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 4.2
  14 May 2019
  Expected output


*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 4.2"));
console.log("") // Line Break

// variable declaration and assignment, define the car to return
let car = {
  id:1,
  type: "Jeep",
  make: "Wrangler"
};

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the app variable and call the express function to start an Express application instance
var app = express();



app.get('/customer/:id', function(request, respond) {
  var id = parseInt(req.params.id, 10);

  res.json({
    firstName: 'Leo',
    lastName: 'Tolstoy',
    employeeId: id;
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started and listening on port 8080');
})
