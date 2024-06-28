const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/authController");
// const usercontroller = require("../controllers/registerdUsercontroller");

router.post("/Signup", usercontroller.createuser);
// router.post("/Login", usercontroller.login);

module.exports = router;
