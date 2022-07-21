const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongoose");

const slotSchema = new mongoose.Schema({
  id: {
    type: mongoose.ObjectId,
    ref : "User"
  },
  from : {
    type: Date,
    required : true
  },
  to : {
    type: Date,
    required : true
  },
  textTime: {
    type: String,
    required : true
  },
});


const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
