const express = require('express');
const router = express.Router();
const StudentProfile = require('../models/StudentProfile'); 

// Create a new student profile
router.post('/profiles', async (req, res) => {
  try {
    console.log("Request body:", req.body); 
    const profile = new StudentProfile(req.body);
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
router.put('/profiles/:id', async (req, res) => {
  try {
    const profile = await StudentProfile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
