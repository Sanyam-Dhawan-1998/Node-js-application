const WebSocket = require("ws");

function createWebSocket(wsPort) {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on("connection", (ws) => {
    console.log(`WebSocket connection established on port ${wsPort}`);

    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);
      // Handle incoming messages as needed
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
      // Handle WebSocket connection closure
    });
  });

  return wss;
}

module.exports = { createWebSocket };
