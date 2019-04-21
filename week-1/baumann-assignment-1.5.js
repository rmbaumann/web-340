/*
=============================================
; Title: baumann-assignment-1.5.js
; Author: Reva Baumann
; Date: 18 April 2019
; Modified by: Reva Baumann
; Description: Recreate the Module Example using URL and query value.
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 1.5
  21 April 2019
  Expected output

*/


// Start Program


// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 1.5"));
console.log("") // Line Break


var http = require("http");

function processRequest(req, res) {

var body = "Hello World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

