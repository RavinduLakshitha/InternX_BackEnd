const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/authController");

router.post("/Signup", usercontroller.createuser);
router.post("/Login", usercontroller.Login);

module.exports = router;
