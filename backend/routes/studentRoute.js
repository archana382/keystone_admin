const express =  require("express");
const {createStudent, getStudentDetails, getAllStudent, getSingleStudent, updateStudent, deleteStudent} = require("../controllers/studentController")
const {isAuthenticatedUser, authorizedRoles} = require("../middleware/authentication");

const router = express.Router();

router.route("/addstudent").post(createStudent);

router.route("/students").get( getAllStudent);

router.route("/student/:id").get(isAuthenticatedUser, getStudentDetails)

// router.route("/admin/adduser").post(isAuthenticatedUser,authorizedRoles("admin"), createUser);


router.route("/student/:id")
.get(isAuthenticatedUser, getSingleStudent)
.put(isAuthenticatedUser, updateStudent)
.delete(isAuthenticatedUser, deleteStudent);

module.exports = router;