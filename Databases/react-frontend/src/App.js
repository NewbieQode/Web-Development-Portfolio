// import useState, useEffect and axios //
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// create App component //
function App() {
  // create model, make, registration, currentOwner and cars state variables //
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [registration, setRegistration] = useState("");
  const [currentOwner, setCurrentOwner] = useState("");
  const [cars, setCars] = useState([]);

  // handleSubmit function to submit/ add new car document //
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(model, make, registration, currentOwner);

    const response = await axios.post("http://localhost:5000/cars/add", {
      method: "POST",
      body: JSON.stringify({ model, make, registration, currentOwner }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response;
    console.log(info);
  };

  // fetchCars function to fetch all the car documents in the database //
  const fetchCars = async () => {
    const response = await axios.get("http://localhost:5000/cars");
    const data = await response;
    setCars(data);
  };

  // handleDelete function to delete specific car document //
  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:5000/cars/delete-owner`,
      {
        method: "DELETE",
      }
    );
    const data = await response;

    alert("Car has been deleted", data);
  };

  // handleUpdate function to update a specific car document with new current owner //
  const handleUpdate = async () => {
    console.log(model, make, registration, currentOwner);

    const response = await axios.put(
      `http://localhost:5000/cars/update-owner`,
      {
        method: "PUT",
        body: JSON.stringify({ model, make, registration, currentOwner }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await response;
    console.log(info);
    alert("Current Car Owner updated Successfully");
  };

  // handleUpdate function to update car documents with new model year //
  const handleUpdate2 = async () => {
    console.log(model, make, registration, currentOwner);

    const response = await axios.put(
      `http://localhost:5000/cars/update-model`,
      {
        method: "PUT",
        body: JSON.stringify({ model, make, registration, currentOwner }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await response;
    console.log(info);
    alert("Car Model updated Successfully");
  };

  // fetchCars data every time the component loads //
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="App-header">
      <h1>Create New Car document</h1>
      {/* form element to enter car information to create new car documents */}
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          name="model"
          value={model}
          placeholder="Model"
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          name="make"
          value={make}
          placeholder="Make"
          onChange={(e) => setMake(e.target.value)}
        />
        <input
          type="text"
          name="registration"
          value={registration}
          placeholder="Registation Number"
          onChange={(e) => setRegistration(e.target.value)}
        />
        <input
          type="text"
          name="currentOwner"
          value={currentOwner}
          placeholder="Current Owner"
          onChange={(e) => setCurrentOwner(e.target.value)}
        />
        <button className="App-button" type="submit">
          Submit
        </button>
      </form>
      <h1>{cars.currentOwner}</h1>
      {/* delete and update to edit and delete specific car documents */}
      <button className="App-button0" onClick={() => handleDelete()}>
        Delete
      </button>{" "}
      <button
        className="App-button1"
        onClick={() => handleUpdate()}
        type="submit"
      >
        Update Name
      </button>
      <button
        className="App-button2"
        onClick={() => handleUpdate2()}
        type="submit"
      >
        Update Model
      </button>
    </div>
  );
}

export default App;
