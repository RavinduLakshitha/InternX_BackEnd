const express = require("express");
const router2 = express.Router();
const usercontroller = require("../controllers/registerdUsercontroller");

router2.post("/Login", usercontroller.login);

module.exports = router2;



