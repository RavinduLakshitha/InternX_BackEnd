require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

mongoose
  .connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error"));

app.listen(PORT, () => {
  console.log("App is running on ${3000}");
});
