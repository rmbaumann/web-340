
 /*
=============================================
; Title: baumann-exercise-6.3.js
; Author: Reva Baumann
; Date: 28 May 2019
; Modified by: Reva Baumann
; Description: Application started and listening on Port 8000
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 6.3
  28 May 2019

  Expected output
  
  Application started and listening on Port 8000


*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 6.3"));
console.log("") // Line Break

// require statements for Express, HTTP, Logger and Mongoose
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

// MongoDB Server Connection
var mongoDB = 'mongodb+srv://user1:b3ll3vu3@buwebdev-cluster-1-ivaeg.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

// Set the global promise
mongoose.Promise = global.Promise;
// Get the connection through Mongoose
var db = mongoose.connection;
// Open the event, error if unsuccessful
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function() {
    console.log('Application connected to mLab');
});

// Declare the app variable and call express to start 
var app = express();
// Call the express function and morgan logger
app.use(logger('short'));

// createServer to pass the application and listen on port 8000
http.createServer(app).listen(8000, function(){
    console.log("Application is started and listening on Port 8000");
});
