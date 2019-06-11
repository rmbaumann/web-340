 /*
=============================================
; Title: baumann-exercise-8.2.js
; Author: Reva Baumann
; Date: 10 June 2019
; Modified by: Reva Baumann
; Description: Cross-Site Scripting
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 8.2.js
  10 June 2019
  Expected output
  

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 4.3"));
console.log("") // Line Break

// Require Statments
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet");
var path = require("path");
var app = express();

// Use Statements
app.set("views", path.resolve(_dirname, "views"));
app.set("view engine", "ejs");

//http call
app.get("/", function (req, res){
    Response.render("index", {
        message: "XSS Prevention"
    });
});

// Create and Listen
http.createServer(app).listen(8080, function(){
    console.log("Application starte and listening on port 8080!")
});

//end program