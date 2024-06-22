const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const advertisementRoutes = require('../src/routes/advertismentRoutes');
const data_product = require('../data');
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

console.log(`Connecting to DB with URL: ${process.env.DB_URL}`);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error"));

const userRoute = require("./routes/authRoutes");
app.use("/user", userRoute);


app.use('/api', advertisementRoutes);

app.get('/displayData', (req, res) => {
  res.json(data_product);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});