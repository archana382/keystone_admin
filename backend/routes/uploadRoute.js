const express = require("express");
const { 
    uploadFiles,
    getUploadFiles } = require("../controllers/uploadController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/authentication");
const router = express.Router();

// router.route("/register").post(registerUser);

router.route("/upload").post(uploadFiles.single('files'));

router.route("/uploaded").get(getUploadFiles);