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

//Get Student Details

exports.getStudentDetails =  catchAsyncError(async(req,res,next)=>{

  const student = await Student.findById(req.user.id);

  res.status(200).json({
      success:true,
      student,
  });
})

 // Get all students 
 exports.getAllStudent = catchAsyncError(async(req,res,next)=>{
  const students = await Student.find();

  res.status(200).json({
      success: true,
      students,
  });
});

// Get single students -- Admin
exports.getSingleStudent = catchAsyncError(async(req,res,next)=>{
  const student = await Student.findById(req.params.id);

  if(!student){
      return next(new ErrorHandler(`Student does not exist with Id: ${req.params.id}`)
      );
  }

  res.status(200).json({
      success: true,
      student,
  });
});


//Update Student -- Admin
exports.updateStudent = catchAsyncError(async(req, res, next) => {
  const newStudentData={
    name:req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    valley: req.body.valley,
    qualification: req.body.qualification,
    country: req.body.country,
    category: req.body.category,
  };

  const student = await Student.findByIdAndUpdate(req.params.id, newStudentData, {
      new:true,
      runValidators: true,
      useFindAndModify: false,
  });

  res.status(200).json({
      success: true,
      student,
  });


})

//Delete student -- Admin
exports.deleteStudent=  catchAsyncError(async(req,res,next)=>{
 
  const student = await Student.findById(req.params.id);
  // remove cloudinary later

  if (!student){
      return next(new ErrorHandler(`Student does not exist with Id: ${req.params.id}`));
  }
 
  await student.remove();

  res.status(400).json({
      success: true,
      message: "Student Deleted Successfully"
  });
});