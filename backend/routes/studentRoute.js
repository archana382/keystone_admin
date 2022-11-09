const express =  require("express");
const {createStudent} = require("../controllers/studentController")
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/authentication");

const router = express.Router();

router.route("/addstudent").post(createStudent);

module.exports = router;