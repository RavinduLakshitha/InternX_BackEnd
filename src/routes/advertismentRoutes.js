const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertismentController');

router.post('/submit-add', advertisementController.submitAdvertisement);
router.get('/display-add',advertisementController.displayAdvetisements);
router.get('/display-add/:id', advertisementController.getAdvertisementById);
router.delete('/display-add/:id', advertisementController.deleteAdvertismentById);

router.get('/filter-jobs', async (req, res) => {
  try {
      const { company_name, title, duration, job_type, location } = req.query;
      const filter = {};

      if (company_name) filter.company_name = company_name;
      if (title) filter.title = title;
      if (duration) filter.duration = duration;
      if (job_type) filter.job_type = job_type;
      if (location) filter.location = location;

      const jobs = await JobPost.find(filter);
      res.json(jobs);
  } catch (error) {
      res.status(500).send('Error fetching job posts');
  }
});

module.exports = router;