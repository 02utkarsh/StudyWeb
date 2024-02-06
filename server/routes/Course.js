// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createcourse,
  showallcourses,
  getcoursedeatils,
} = require("../controllers/courses")


// Categories Controllers Import
const {
  showallcategory,
  createcategory,
  categorypagedetail,
} = require("../controllers/categorys")

// Sections Controllers Import
const {
  createsection,
  updatesection,
  deletesection,
} = require("../controllers/Sections")

// Sub-Sections Controllers Import
const {
  createsubsection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsections")

// Rating Controllers Import
const {
  createrating,
  getaverageRating,
  findallreview,
} = require("../controllers/RatingAndReview")

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/auth")

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createcourse);
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createsection);
// Update a Section
router.post("/updateSection", auth, isInstructor, updatesection);
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deletesection);
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createsubsection);
// Get all Registered Courses
router.get("/getAllCourses", showallcourses);
// Get Details for a Specific Courses
router.post("/getCourseDetails", getcoursedeatils);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createcategory)
router.get("/showAllCategories", showallcategory)
router.post("/getCategoryPageDetails", categorypagedetail)

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createrating)
router.get("/getAverageRating", getaverageRating)
router.get("/getReviews", findallreview)

module.exports = router;