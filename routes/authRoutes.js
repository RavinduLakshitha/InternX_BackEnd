const express = require("express");
const router = express.Router();
const cors = require("../controllers/authController.js");
router.post("/create", authController.createUser);

module.exports = router;
