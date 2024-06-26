const mongoose = require("mongoose");
// const { schema } = mongoose;

const userShema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model("RegisterdUser", userShema);

module.exports = UserModel;
