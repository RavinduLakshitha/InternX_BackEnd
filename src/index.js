const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const advertisementRoutes = require('../src/routes/advertismentRoutes');
const studentProfiles = require('../src/routes/studentProfile');
const companyProfiles = require('../src/routes/companyProfile');
const resumeRoutes = require('./routes/resumeRoutes');
const mongoose = require("mongoose");
require('dotenv').config();//removed existing code and change it
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error"));

const userRoute = require("./routes/authRoutes");
app.use("/user", userRoute);

const userRoute2 = require("./routes/registerduserRoutes");
app.use("/user", userRoute2);

app.use('/api', advertisementRoutes);
app.use('/api', studentProfiles);
app.use('/api/company', companyProfiles);
app.use('/api', resumeRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});