const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4505;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
  console.log("Welcome to the application.");
});

app.use("/api", require("./routes/AllTasks"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
