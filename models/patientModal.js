const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongoose");

const patientSchema = new mongoose.Schema({
  date : {
    type: String,
    required : true
  },
  doctorID: {
    type: String,
    required : true
  },
  slotId : {
    type: String,
    required : true
  },
  slotText : {
    type: String,
    required : true
  },
  name : {
    type: String,
    required : true
  },
  email : {
    type: String,
    required : true
  }
});


const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
