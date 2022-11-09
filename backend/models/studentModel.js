const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
      
    },
    phone: {
      type: Number,
      required: [true, "Please Enter Phone Number"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    valley: {
      type: String,
      required: [true, "Please Enter Valley"],
    //   minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
    qualification: {
      type: String,
      required: [true, "Please Enter qualification"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    country: {
        type: String,
        required: [true, "Please select country"]
    },
    category: {
        type: String,
        required: [true, "Please select category"]
    },
    role: {
      type: String,
      default: "student",
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },

    
});


module.exports = mongoose.model("Student", studentSchema);

