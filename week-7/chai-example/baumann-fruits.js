 /*
=============================================
; Title: baumann-fruits.js
; Author: Reva Baumann
; Date: 03 June 2019
; Modified by: Reva Baumann
; Description: Application started on port 8080!
;============================================
*/

/*
Expected output:
  Reva Baumann
  baumann-fruits.js
  03 June 2019
  Expected output
  

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 4.3"));
console.log("") // Line Break

// Create fruits function
function fruits(str) {
    return str.split(',');
}

// Export the modules
module.exports = fruits;