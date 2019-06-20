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
var mongoDB = "mongodb+srv://admin:b3ll3vu3@buwebdev-cluster-1-ivaeg.mongodb.net/ems?retryWrites=true&w=majority";

// Express App
var app = express();

// Call to connect to database.
mongoose.connect(mongoDB, {
});

// Set global promise
mongoose.Promise = global.Promise;

// Creates variable containing mongoose connection
var db = mongoose.connection;

// On error output error message.
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// On success output message.
db.once('open', function () {
  console.log('Application connected to mLab');
})


// Instructs express to look inside of the views folder for files.
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger("short"));
app.use(express.static('./'));

app.use(bodyParser.urlencoded({
  extended: true
}));

// cookieParser
app.use(cookieParser());

// csrfProtection
app.use(csrfProtection);

// Generate new token
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// Renders the home page
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    page: "home"
  });
});

// Renders the list page
app.get("/list", function(request, response) {
  Employee.find({lastName: queryName} {
    if(error) {
      throw error;
    }

    response.render("list", {
      title: "Employees",
      page: "list",
      employees
    });
  });
});

// Renders the new employee page
app.get("/new", function(request, response) {
  response.render("new", {
    title: "New Employee",
    page: "new"
  });
});

// New Employee Details, error message if not completed
app.post('/process', function(req, res) {
  if (!req.body.txtFirstName) {
    res.status(400).send('Entries must have a first name!');
    return;
  }

  if (!req.body.txtLastName) {
    res.status(400).send('Entries must have a last name!');
    return;
  }

  // Output to console.log
  var firstName = req.body.txtFirstName;
  var lastName = req.body.txtLastName;
  console.log(firstName + " " + lastName);

  //  First, LAst Name
  let employee = new Employee({
    firstName, lastName
  });

  // Save employee to database
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + " " + lastName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

//  Details of View Page
app.get('/view/:queryName', function(request, response) {
  var queryName = request.params['queryName'];

  Employee.find({_id: queryName}, function(err, employees) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(employees);

      if (employees.length > 0) {
        response.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      }
      else {
        response.redirect('/list')
      }
    }
  })
});

// Use port 8080 to listen
app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function() {
  console.log("Application started on port 2000" + app.get('port'));
});
