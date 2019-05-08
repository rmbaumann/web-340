 /*
=============================================
; Title: baumann-assignment-3.4.js
; Author: Reva Baumann
; Date: 06 May 2019
; Modified by: Reva Baumann
; Description: Putting It All Together
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 3.4
  29 April 2019
  Expected output


  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 3.4"));
console.log("") // Line Break

// Declare the express variable and import the express module
var express = require("express");
// Declare the http vairable and import the http module
var http = require("http");
// Declare the path variable and import the path module
var path = require("path");
// Declare the logger variable and import the Morgan Logging module
var logger = require("morgan");

//Declare the app variable and call express function
var app = express();

//Call Express set function to use views directory
app.set("views", path.resolve(__dirname, "views"));

// View EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

// Render the index.html
app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });
});

// About Page
app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

// Contact Page
app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    });
});


// Products Page
app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
});

// Use console.log to listen for port 8080 and respond
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});

//end program
