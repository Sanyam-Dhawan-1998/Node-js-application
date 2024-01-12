const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./services/db");
const { setupRoutes } = require("./routes");
const { createWebSocket } = require("./services/WebSocket"); // Import the WebSocket setup function

const app = express();
const httpPort = process.env.PORT || 3000;
const wsPort = process.env.WS_PORT || 3001; // Set the desired WebSocket port

app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

// Pass the 'app' to setupRoutes function
setupRoutes(app);

// Create an HTTP server using Express app
const httpServer = http.createServer(app);

// Start the HTTP server
httpServer.listen(httpPort, () => {
  console.log(`Server is running on port ${httpPort}`);
});

// Pass the WebSocket port to createWebSocket function
const wss = createWebSocket(wsPort);

// Attach the WebSocket server to the HTTP server
httpServer.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
