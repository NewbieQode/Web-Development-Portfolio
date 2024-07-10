const mongoose = require("mongoose");

// Initialises our schema //
const carSchema = mongoose.Schema({
  Model: {
    // Sets the data type of the model field to be a string //
    type: Number,
    // Sets the model field to be required //
    required: true,
  },
  Make: {
    type: String,
    required: true,
  },
  Registration: {
    type: String,
    required: true,
  },
  CurrentOwner: {
    type: String,
    required: false,
    // Sets a default value for the current owner field if not provided
    default: "unknown",
  },
});

module.exports = mongoose.model("Car", carSchema);
