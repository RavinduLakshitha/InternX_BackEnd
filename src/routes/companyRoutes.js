const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const { verifyToken, isCompany } = require("../middleware/authMiddleware");

router.post("/Signup", companyController.createcompany);
// Protected route example for company dashboard
router.get("/dashboard", verifyToken, isCompany, (req, res) => {
  res.json({ message: "Welcome to the company dashboard!" });
});

module.exports = router;
