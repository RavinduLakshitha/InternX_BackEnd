const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const data_product = require("./data");

app.use(cors()); // Allow requests from any origin

// Define the route to serve data
app.get("/displayData", (req, res) => {
  res.json(data_product); // Send data_product directly
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
