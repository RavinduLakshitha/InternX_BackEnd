const mongoose = require("mongoose");
// const { schema } = mongoose;

const userShema = new mongoose.Schema({
  fullname: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userShema);

module.exports = UserModel;
