const express = require('express');
const connectDB = require('./src/mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentProfiles = require('./src/routes/studentProfile');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', studentProfiles);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
