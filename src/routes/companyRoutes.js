const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
// const usercontroller = require("../controllers/registerdUsercontroller");

router.post("/Signup", companyController.createcompany);
// router.post("/Login", usercontroller.login);

module.exports = router;