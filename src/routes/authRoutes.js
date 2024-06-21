const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/authController");
router.post("/create", usercontroller.createuser);

module.exports = router;
