const express = require('express');
const router = express.Router();
const multer = require('multer');
const StudentProfile = require('../models/StudentProfile');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Create a new student profile
router.post('/profiles', upload.fields([{ name: 'profilePicture' }, { name: 'resume' }]), async (req, res) => {
  try {
    const { name, email, mobile, address, workExperience, education } = req.body;
    const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : '';
    const resume = req.files['resume'] ? req.files['resume'][0].path : '';

    const profile = new StudentProfile({ 
      name, 
      email, 
      mobile, 
      address, 
      workExperience, 
      education, 
      profilePicture, 
      resume 
    });

    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    console.error("Error saving profile:", error);  
    res.status(400).send(error);
  }
});

// Get all student profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await StudentProfile.find();
    res.status(200).send(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);  
    res.status(500).send(error);
  }
});

// Get a student profile by ID
router.get('/profiles/:id', async (req, res) => {
  try {
    const profile = await StudentProfile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    console.error("Error fetching profile by ID:", error);  
    res.status(500).send(error);
  }
});

// Update a student profile by ID
router.put('/profiles/:id', upload.fields([{ name: 'profilePicture' }, { name: 'resume' }]), async (req, res) => {
  try {
    const { name, email, mobile, address, workExperience, education } = req.body;
    const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : '';
    const resume = req.files['resume'] ? req.files['resume'][0].path : '';

    const updatedData = { name, email, mobile, address, workExperience, education };
    if (profilePicture) updatedData.profilePicture = profilePicture;
    if (resume) updatedData.resume = resume;

    const profile = await StudentProfile.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a student profile by ID
router.delete('/profiles/:id', async (req, res) => {
  try {
    const profile = await StudentProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
