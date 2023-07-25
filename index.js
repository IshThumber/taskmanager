const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 4505;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
  console.log("Welcome to the application.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
