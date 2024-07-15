const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
router.post('/apply', resumeController.submitResume);

module.exports = router;