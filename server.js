const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;
const DB_URL = 'mongodb+srv://ravi123:Abc123@cluster0.fbt0o.mongodb.net/internX';

mongoose.connect(DB_URL)
.then(() =>{
  console.log('DB connected');
})
.catch((err) => console.log('DB connection error'))

app.listen(PORT, () =>{
  console.log('App is running on ${3000}');
})