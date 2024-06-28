const mongoose = require('mongoose');

const StudentProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  resume: String,
  workExperience: String,
  education: String,
  profilePicture: String,
});

module.exports = mongoose.model('StudentProfile', StudentProfileSchema);
