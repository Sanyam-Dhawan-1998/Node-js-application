const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./services/db");
const { setupRoutes } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
// connectToDatabase();

// Pass the 'app' to setupRoutes function
setupRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
