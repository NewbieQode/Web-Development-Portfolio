// Import all dependencies //
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();

// Define the port number for the server //
const PORT = process.env.PORT || 8000;

//  Allows us to parse the body of a request //
app.use(bodyParser.json());

// Define a route to check POSTed username and password //
app.post("/login", (req, res) => {
  // Req.body is sent by the client //
  const usr = req.body.username;
  const pwd = req.body.password;
  if (usr === "zama" && pwd === "secret") {
    payload = {
      name: usr,
      admin: true,
    };
    // Generates a proper JWT //
    const token = jwt.sign(JSON.stringify(payload), "jwt-secret", {
      algorithm: "HS256",
    });
    res.send({ token: token });
  } else {
    res.status(403).send({ err: "Incorrect login!" });
  }
});

// Define a route to check and verify the JWT //
app.get("/resource", (req, res) => {
  const auth = req.headers["authorization"];
  const token = auth.split(" ")[1];
  try {
    // verifies a given token using the specified secretkey //
    const decoded = jwt.verify(token, "jwt-secret");
    res.send({
      msg: `hello, ${decoded.name}! your Json web token has been verified.`,
    });
  } catch (err) {
    res.status(401).send({ err: "bad JWT!" });
  }
});

// Define a route to check and verify the JWT and user admin //
app.get("/admin_resource", (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const decoded = jwt.verify(token, "jwt-secret");
    if (decoded.admin) {
      res.send({ msg: "Success!! ;)" });
    } else {
      // Response if user is not the admin //
      res
        .status(403)
        .send({ msg: "Your JWT was verified, but you are not an admin." });
    }
  } catch (e) {
    res.sendStatus(401);
  }
});

// Start the server //
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
