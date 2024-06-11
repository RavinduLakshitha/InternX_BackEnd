const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");

const app = express();
app.use(express.json());

const PORT = 8000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error"));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

const userRoute = require("../routes/authRoutes");
app.use("/user", userRoute);
