const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/authController");
const { verifyToken, isUser } = require("../middleware/authMiddleware");

router.post("/Signup", usercontroller.createuser);

// Protected route example for user profile
router.get("/profile", verifyToken, isUser, (req, res) => {
  res.json({ message: "Welcome to the user profile!" });
});

module.exports = router;
