const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./services/db");
const { setupRoutes } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase()
  .then(() => {
    // MongoDB connected successfully, start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Everything is up and running!");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Pass the 'app' to setupRoutes function
setupRoutes(app);
