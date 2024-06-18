const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/advertismentController");
router.post("/create", usercontroller.createuser);

module.exports = router;
