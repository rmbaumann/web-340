 /*
=============================================
; Title: baumann-exercise-7.2.js
; Author: Reva Baumann
; Date: 03 June 2019
; Modified by: Reva Baumann
; Description: Application started on port 8080!
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 7.2.js
  03 June 2019
  Expected output
  

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Assignment 4.3"));
console.log("") // Line Break

// var declaration
var assert = require("assert");

// Describe the testing features
describe("String#split", function(){
    //test cases
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple, Orange, Mango'.split(',')));
    });
})
