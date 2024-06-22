const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertismentController');

router.post('/submit-add', advertisementController.submitAdvertisement);
router.get('/display-add',advertisementController.displayAdvetisements);

module.exports = router;