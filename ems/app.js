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
// Declare the Mongoose Module
var mongoose = require("mongoose");
// Declare Helmet Module
var helmet = require("helmet");
// Declare bodyParser module
var bodyParser = require("body-parser");
// Declare cookieParser module
var cookieParser = require("cookie-parser");
// Declare CSRF module
var csrf = require("csurf");
// Cross site request forgery object
var csrfProtection = csrf({cookie: true});

// Declare employee variables and import the module
var Employee = require("./models/employee")

// connection to ems database
var mongoDB = "mongodb+srv://user1:b3ll3vu3@buwebdev-cluster-1-ivaeg.mongodb.net/test?retryWrites=true&w=majority";

// Call the Mongoose connection function
mongoose.connect(mongoDB, {});
var db = mongoose.connection;

// Connection Error Details
db.on("error", console.error.bind(console, 'MongoDB Connection Not Working'));

// Open event on MongoDB
db.on("open", function(){
    console.log("Application started and connected to MongoDB");
});

var employee = new Employee();

var app = express();

// Express Use function  body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// Cookie Parser
app.use(cookieParser());

// CSRF
app.use(csrfProtection);

// Generate a token here
app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
})

// Set Functions to setup logers, view engine, helmet, etc.
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger("short"));
app.use(express.static('./'));
app.use(express.static('./'));

// Renders the index page
app.get("/", function(request, response) {
    response.render("index", {
        title: "Home Page",
        page: "home",
    });
});

app.get("/list", function (request, response) {
    Employee.find({}, function(error, employees){
        if(error){
            throw error;
        }
        
        response.render("list", {
            title: "Employee list",
            page: "list",
            employees
        })
    });
});


// Renders the new page
app.get("/new", function(request, response) {
    response.render("new", {
        title: "New Employees",
        page: "new",
    });
});

// Employee form details
app.post("/process", function(request, response){
    if(!request.body.txtFirstName){
        response.status(400).send("Fill out Form Completely");
        return;
    }

    if(!request.body.txtLastName){
        response.status(400).send("Last Name is Required");
        return;
    }

    var firstName = request.body.txtFirstName;
    var lastName = request.body.txtLastName;

    console.log(firstName, lastName);
    var employee = new Employee({
        firstName,
        lastName
    });

    // Save Function
    employee.save(function(error){
        if(error){
            throw error;
        }
        console.log('Employee ${firstName} ${lastName} saved!');
    });

    // Go to homepage redirect
    response.redirect("/");
});



// Renders the View Page
app.get("/view/:id?", function(request, response){
    var employeeId = request.params && request.params.id ? parseInt(request.params.id, 10) : null;
    response.render("view", {
        title: "View Employees",
        page: "view",
        employeeId: employeeId
    });
});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//end program