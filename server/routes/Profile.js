const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")
const {
  deleteaccount,
  updateprofile,
  alluserdetails,
  // updateDisplayPicture,
  // getEnrolledCourses,
} = require("../controllers/Profiles")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", deleteaccount)
router.put("/updateProfile", auth, updateprofile)
router.get("/getUserDetails", auth, alluserdetails)
// Get Enrolled Courses
// router.get("/getEnrolledCourses", auth, getEnrolledCourses)
// router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router