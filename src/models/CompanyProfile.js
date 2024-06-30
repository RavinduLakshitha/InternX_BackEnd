const mongoose = require('mongoose');

const CompanyProfileSchema = new mongoose.Schema({
  name: String,
  companyInformation: String,
  profilePicture: String,
});

module.exports = mongoose.model('CompanyProfile', CompanyProfileSchema);
