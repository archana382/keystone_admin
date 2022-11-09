const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const Student =  require("../models/studentModel");
const sendToken = require("../utils/jwtToken");

exports.createStudent =  catchAsyncError(async (req, res, next) => {
    // req.body.user= req.user.id;
  
    const student =  await Student.create(req.body);
    res.status(201).json({
      success: true,
      student,
    });
  
  });