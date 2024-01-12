const express = require("express");
const bodyParser = require("body-parser");
const http = require("http"); // Use http module for creating the server
const { connectToDatabase } = require("./services/db");
const { setupRoutes } = require("./routes");
const createWebSocketServer = require("./services/webSocket");

const app = express();
const server = http.createServer(app); // Create an HTTP server using http module

const port = process.env.PORT || 3000;
const websocketPort = process.env.WEBSOCKET_PORT || 8080;

app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

// Pass the 'app' to setupRoutes function
setupRoutes(app);

// Create and attach the WebSocket server to the HTTP server
createWebSocketServer(server); // Pass the http server instance

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// WebSocket server is now running on the same port as the HTTP server
