 /*
=============================================
; Title: app.js
; Author: Reva Baumann
; Date: 20 May 2019
; Modified by: Reva Baumann
; Description: EJS Layouts
;============================================
*/

/*
Expected output:
  Reva Baumann
  App.ejs
  15 May 2019



*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "App.ejs"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");
// Declare the http variable and import the http module
var http = require("http");
// Declare the path to find views
var path = require('path');
// Declare a Morgan logger
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function(req, res) {
    Response.render("index", {
        title: "Home Page"
    });
});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!")
})
