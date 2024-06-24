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
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
