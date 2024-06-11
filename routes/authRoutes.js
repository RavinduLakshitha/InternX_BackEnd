const express = require("express");
const router = express.Router();
const cors = require("../controllers/authController.js");
router.post("/create", cors.createuser);

module.exports = router;
