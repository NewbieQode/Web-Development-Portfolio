// Import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import routes
const getCars = require("./routes/getCars");

// Initialize express
const app = express();

// Set up port for server to listen on
const PORT = process.env.PORT || 5000;

app.use(cors());

// mongoDB URI string retrieved from Atlas cluster.
const uri =
  "mongodb+srv://tamika10trimblett:3YtiYVgowUEsVEgP@cluster-name.blu3atu.mongodb.net/";

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("Successfully connected to the database!");
  },
  (err) => {
    console.log("Could not connect to the database..." + err);
  }
);

// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:5000/cars
app.use("/cars", getCars);

// Start up express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
