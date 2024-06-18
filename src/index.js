const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const advertisementRoutes = require('./routes/advertismentRoutes');
const data_product = require('./data');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kushana:Izn5o0iC865jB8yg@cluster0.erqc8h4.mongodb.net/ReactCardInternX?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', advertisementRoutes);

app.get('/displayData', (req, res) => {
  res.json(data_product);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
