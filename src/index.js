const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const advertisementRoutes = require('../src/routes/advertismentRoutes');
const studentProfiles = require('../src/routes/studentProfile');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error"));

const userRoute = require("./routes/authRoutes");
app.use("/user", userRoute);

app.use('/api', advertisementRoutes);
app.use('/api', studentProfiles);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});