const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongoose");

const slotSchema = new mongoose.Schema({
  id: {
    type: String,
    required : true
  },
  slotDate : {
    type: String,
    required : true
  },
  from : {
    type: String,
    required : true
  },
  to : {
    type: String,
    required : true
  },
  textTime: {
    type: String,
    required : true
  },
  status: {
    type: String,
    default : 'active'
  },
});


const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
