const WebSocket = require("ws");

function createWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("WebSocket connected");

    ws.send("Welcome to the WebSocket server");

    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);
    });

    ws.on("close", () => {
      console.log("WebSocket disconnected");
    });
  });

  return wss;
}

module.exports = createWebSocketServer;
