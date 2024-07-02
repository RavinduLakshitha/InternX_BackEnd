const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertismentController');

router.post('/submit-add', advertisementController.submitAdvertisement);
router.get('/display-add',advertisementController.displayAdvetisements);
router.get('/display-add/:id', advertisementController.getAdvertisementById);
router.delete('/delete-add/:id', advertisementController.deleteAdvertismentById);

module.exports = router;