/*
=============================================
; Title: baumann-assignment-2.4js
; Author: Reva Baumann
; Date: 30 April 2019
; Modified by: Reva Baumann
; Description: EJS Views Example
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 2.4
  29 April 2019
  Expected output


*/


// Start Program


// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 2.4"));
console.log("") // Line Break


// Declare the http variable and import the module
var http = require("http");

// Declare the express variable and import the module
var express = require("express");

// Declare the path variable and import the module
var path = require("path");

// Call the express function to start Express App
var app = express();

// Create address using app.get
app.get("/", function(request,response){
    response.render("index", {
      firstName:"Reva",
      lastName:"Baumann",
      address: "2000 Wayward Way, Omaha, NE"
    });
});

// Create an alert box
function myFunction() {
  alert("I am an alert box!");
}
// Tell express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS View Engine
app.set("view engine", "ejs");

app.get("/", function(request ,response){
    response.render("index", viewModel);
});

// create 8080 server connection
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

// Output

// End Program
