const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  companyname: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  role:{
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },

});

const CompanyModel= mongoose.model("Company", userShema);

module.exports = CompanyModel;