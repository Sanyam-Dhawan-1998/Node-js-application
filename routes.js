const express = require("express");
const { handleUpload } = require("./index");

function setupRoutes(app) {
  const router = express.Router();

  // Defining the routes
  router.get("/", (req, res) => {
    res.send("The server has started");
  });

  router.post("/api/upload", async (req, res) => {
    try {
      console.log("Received POST request:", req.body); // Log the request body
      const result = await handleUpload(req.body.APIKey);
      console.log("Upload result:", result); // Log the result
      res.json(result);
    } catch (error) {
      console.error("Error:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error." });
    }
  });

  app.use("/", router); 
}

module.exports = { setupRoutes };
