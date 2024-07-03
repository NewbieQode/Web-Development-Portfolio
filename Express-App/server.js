// Import and initialise express //
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Allow json to be parsed //
app.use(express.json());

// Routing //
// Read (get) //
app.get("/", (req, res) => {
  const data = require("./src/person.json");
  res.send("Welcome " + data.name);
});

// Serve static resources //
app.use(express.static(`public`));

// Error Handling //
app.get(`*`, (req, res, next) => {
  let err = new Error(
    `Sorry! Can't find that resource. Please check your URL :)`
  );
  err.statusCode = 404;
  next(err);
});

// Create server //
app.listen(port, () =>
  console.log(`server is running on http://localhost:3000`)
);
