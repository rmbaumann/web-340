/*
============================================
; Title:  baumann-assignment-1.5.js
; Author: Reva Baumann
; Date:   28 February 2019
; Description: Created a Node.js server
;===========================================
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

const http = require('http');

function processRequest(req, res) {
  const body = 'Hello World!';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);

// end program
