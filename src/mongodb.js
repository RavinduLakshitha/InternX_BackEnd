const mongoose = require("mongoose");

mongoose
  .Collect("mongodb://localhost:27017/internX")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log("DB connection error"));

const LogInShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Collection1", LogInShema);

module.exports = collection;
