const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGODB_URL;

// Ensure the MONGO_URI environment variable is defined
// if (!connectionString) {
//   console.error(
//     "MongoDB connection string is missing. Please check your .env file."
//   );
//   process.exit(1);
// }

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Error connecting to database:", err));

const connectDB = async () => {
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database connected successfully");
};

// connectDB();

module.exports = connectDB;
