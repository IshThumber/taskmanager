const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4505;

const db = require("./db/connection");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
  console.log("Welcome to the application.");
});

app.use("/api/v1/tasks", require("./routes/AllTasks"));

const start = async () => {
  try {
    await db(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
};

start();
