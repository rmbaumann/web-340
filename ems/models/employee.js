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

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema with first and last name
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model using the Schema.
module.exports = mongoose.model('Employee', EmployeeSchema);

// end program
