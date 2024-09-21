const express = require('express');
const router = express.Router();
const multer = require('multer');
const CompanyProfile = require('../models/CompanyProfile');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the folder to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define the filename format
  }
});

const upload = multer({ storage: storage });

// Create a new company profile
router.post('/profiles', upload.single('profilePicture'), async (req, res) => {
  try {
    const profile = new CompanyProfile({
      ...req.body,
      profilePicture: req.file ? req.file.path : null,
    });
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all company profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await CompanyProfile.find();
    res.status(200).send(profiles);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a company profile by ID
router.get('/profiles/:id', async (req, res) => {
  try {
    const profile = await CompanyProfile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a company profile by ID
router.put('/profiles/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.file) {
      updates.profilePicture = req.file.path;
    }
    const profile = await CompanyProfile.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a company profile by ID
router.delete('/profiles/:id', async (req, res) => {
  try {
    const profile = await CompanyProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
