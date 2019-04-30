/*
=============================================
; Title: baumann-exercise-2.3.js
; Author: Reva Baumann
; Date: 29 April 2019
; Modified by: Reva Baumann
; Description: Directory of Pages
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 2.3
  29 April 2019
  Expected output

*/


// Start Program


// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 2.3"));
console.log("") // Line Break

// Create require statement to use express
var express = require("express");

// Create require statement for http library
var http = require("http");

// Local variable for Express app
var app = express();

// Route interceptors

// Root route, function features request and has a response
// Homepage create
app.get('/', function(req, res)
{
    res.end('Welcome to the homepage.\n');
});

// About Page create
app.get('/about', function(req, res)
{
    res.end('Welcome to the page.\n');
});

// Contact page create
app.get('/contact', function(req,res)
{
    res.end('Welcome to the contact page.\n');
});

// Bad page 404
app.use(function(req, res)
{
    res.statusCode = 404;
    res.end('404!\n');
});

// Create a node server, listening on port 8080
http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s', 3000);
});

// end program
