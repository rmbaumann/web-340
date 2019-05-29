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
var path = require("path");
// Declare a Morgan logger
var logger = require("morgan");

var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger("short"));
app.use(express.static('./'));

// Renders the index page
app.get("/", function(request, response) {
    response.render("index", {
        title: "Home Page",
        page: "home",
    });
});

// Renders the list page
app.get("/list", function(request, response) {
    response.render("list", {
        title: "List Employees",
        page: "list",
    });
});

// Renders the new page
app.get("/new", function(request, response) {
    response.render("new", {
        title: "New Employees",
        page: "new",
    });
});

// Renders the View Page
app.get("/view", function(request, response){
    response.render("view", {
        title: "View Employees",
        page: "view",
    });
});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
