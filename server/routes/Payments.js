// Import the required modules
const express = require("express")
const router = express.Router()

const { capturepayments, verifysignature } = require("../controllers/Payments")
const { auth, isStudent, isAdmin,isInstructor } = require("../middleware/auth")
// isInstructor information is removed
router.post("/capturePayment", auth, isStudent, capturepayments)
router.post("/verifySignature", verifysignature)

module.exports = router;