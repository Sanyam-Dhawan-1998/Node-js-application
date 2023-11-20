const mongoose = require("mongoose");
require("dotenv").config();
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
}

module.exports = { connectToDatabase };
