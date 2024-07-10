const express = require("express");
// Use built-in Express router //
const router = express.Router();
const carController = require("../controllers/cars.controller");

// Get all car documents //
router.get("/", carController.findAll);

// Create a new car document //
router.post("/add", carController.create);

// Update a car document with a new current owner //
router.put("/update-owner", carController.updateByOwner);

// Update cars document with a new model year //
router.put("/update-model", carController.updateByModel);

// Delete specific cars with specified current owner name //
router.delete("/delete-owner", carController.deleteCarsByOwner);

module.exports = router;
