const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const advertisementRoutes = require('../src/routes/advertismentRoutes');
const studentProfiles = require('./src/routes/studentProfile');
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => console.log("DB connection error"));

const userRoute = require("./routes/authRoutes");
app.use("/user", userRoute);

app.use('/api', advertisementRoutes);
app.use('/api', studentProfiles);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});