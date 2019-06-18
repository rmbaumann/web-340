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

var Employee = require("./models/employee");

// connection to ems database
var mongoDB = "mongodb+srv://user1:b3ll3vu3@buwebdev-cluster-1-ivaeg.mongodb.net/test?retryWrites=true&w=majority";


// Express App
var app = express();

// Morgan Logger
app.use(logger("short"));

// Security
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: true });
app.use(helmet.xssFilter());
app.use(parseForm);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
    let token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.locals.csrfToken = token;
    next();
});

// Static Files
app.use(express.static(__dirname));

// View Engine
app.set("port", process.env.PORT || 3001);
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(express.static('./'));

// Express Routing
app.get("/", function(request, response) {
    res.render("index", {
        title: "Home Page"
        page: "home"
    });
});

app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if(error){
            throw error;
        }

        response.render("list", {
            title: "Employee List",
            page: "list",
            employees: employees
        });
    });
});

app.get("/new", function(request, response) {
    response.render("new", {
        title: "Add New Employee",
        csrfToken: req.csrfToken()
    });
});

app.post("/process", function(request, response) {
    if (!request.body.txtName) {
        response.status(400).send("Entries must have a name!");
        return;
    }

    if(!request.body.txtLastName){
        response.status(400).sent("Entries must have a last name!");
        return;
    }

    var firstName = request.body.txtFirstName;
    var lastName = request.body.txtLastName;

    console.log(firstName, lastName);
    var employee = new Employee({
        firstName,
        lastName,
    });
    
    employee.save(function(error){
        if(error){
            throw error;
        }
        console.log('Employee ${firstName} ${lastName} saved!!');
    });

    response.redirect("/");
});

app.get("/view/:queryName", function(req, res) {
    let qn = req.params.queryName;
    Employee.find({ "name": qn }, function(error, emps) {
        if(error) throw error;
        console.log(emps);
        if(emps.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: emps[0]
            });
        }
        else {
            res.redirect("/list");
        }
    });
});

// Mongo Connection 
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance.");
});

// HTTP Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Application started and listening on Port 3001!");
});

//end program