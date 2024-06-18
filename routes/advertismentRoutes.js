const express = require('express');
const router = express.Router();
const advertisementController = require('../controller/advertismentController');

router.post('/submit-add', advertisementController.submitAdvertisement);

module.exports = router;