/*
============================================
; Title: Baumann Assignment 7.4
; Author: Reva Baumann
; Date: 06/02/2019
; Modified By: Reva Baumann
; Description: EMS Mongoose Schema and Model development
;===========================================
*/

// start program
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String
});

var Employee = mongoose.model("ems", employeeSchema);

module.exports = Employee;
// end program