/*
=============================================
; Title: baumann-exercise-1.3.js
; Author: Reva Baumann
; Date: 18 April 2019
; Modified by: Reva Baumann
; Description: Recreate the Module Example using URL and query value.
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 1.3
  21 April 2019
  Expected output

*/


// Start Program


// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 1.4"));
console.log("") // Line Break

// URL Module
var url = require("url");

// Call URL Parse function
var parsedURL = url.parse('https://github.com/rmbaumann/rmbaumann.github.io');


// Output
// Call the console function 
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// End Program