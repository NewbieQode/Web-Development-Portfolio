// import car.model file //
const Car = require("../models/car.model");

// create new car document //
exports.create = async (req, res) => {
  try {
    const carModel = new Car({
      Model: 2005,
      Make: "Ford Fiesta",
      Registration: "ABC 123 GP",
      CurrentOwner: "Sue Bailey",
    });

    // save new car document //
    const savedCar = await carModel.save();

    // successful response //
    console.log(savedCar);
    res.send("A car has been added!!");
    //  error response //
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error has occurred while creating the new car.",
    });
  }
};

exports.findAll = (req, res) => {
  // use find method to return all car documents //
  Car.find()
    .then((cars) => {
      // Send the retrieved cars as a success response //
      res.send(cars);
    })
    .catch((err) => {
      // Error response //
      console.log(err);
      res.status(500).send({
        message: "An error occurred while retrieving cars",
      });
    });
};

exports.updateByOwner = async (req, res) => {
  try {
    // Define the query to find cars with the specified Current owner //
    const query = { CurrentOwner: "Sue Bailey" };

    // Define the new data to update the current owner //
    const update = { CurrentOwner: "Sue Smith" };

    /* Use the "updateOne" method to update a car document with the
        specified current owner and set the "new" option to true to get the
        updated document as the result */
    const updatedCar = await Car.updateOne(query, update, { new: true });
    if (updatedCar) {
      res.send("Current Owner updated successfully");
    } else {
      res.status(404).send("Car not found");
    }
  } catch (error) {
    console.log("Something went wrong updating Car data.", error);
    res.status(500).send("An error has occurred while updating.");
  }
};

exports.updateByModel = async (req, res) => {
  try {
    // Define the query for cars with the specified model //
    const query = { Model: 2005 };

    // Define the new data to update the model //
    const update = { Model: 2007 };

    /* Use the "updateMany" method to update cars with the
        specified model year and set the "new" option to true to get the
        updated documents as the result */
    const updatedCars = await Car.updateMany(query, update, { new: true });

    if (updatedCars) {
      res.send("Car Model updated successfully");
    } else {
      res.status(404).send("Car model not found");
    }
  } catch (error) {
    console.log("Something went wrong updating Car data.", error);
    res.status(500).send("An error has occurred while updating.");
  }
};

exports.deleteCarsByOwner = async (req, res) => {
  try {
    // Remove a car with the specified current owner name //
    const deleteResult = await Car.deleteOne({ CurrentOwner: "Sue Smith" });

    if (deleteResult.deleteCount > 0) {
      res.send("successfully deleted Current Owner from Car.");
    } else {
      res.send("Current Owner not found...");
    }
  } catch (error) {
    console.error("An error occurred while removing Car data", error);
    res.status(500).send("An error occurred while removing Car data.");
  }
};
