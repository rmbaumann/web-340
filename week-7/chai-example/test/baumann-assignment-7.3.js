 /*
=============================================
; Title: baumann-assignment-7.3.js
; Author: Reva Baumann
; Date: 03 June 2019
; Modified by: Reva Baumann
; Description: Application started on port 8080!
;============================================
*/

/*
Expected output:
  Reva Baumann
  baumann-assignment-7.3.js
  03 June 2019
  Expected output
  

*/

// Start Program

// declare a fruit variable
var fruits = require("../baumann-fruits");

// Declaration statement for Chai
var chai = require("chai");
var assert = chai.assert;

//details of fruits
describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});

// end program