const http = require('http');
const WebSocket = require("websocket").server;

// http server has a socket 
const httpServer = http.createServer((req, res) => {
    console.log("we have received request");
})

const websocket = new WebSocketServer({
    "httpServer": httpServer,
})

websocket.on("request", request => {
    connection = request.accept(null, () => console.log("Opened!!"));
    connection.on("onopen", () => console.log("Opened!!"));
    connection.on("onclose", () => console.log("Closed!!"));
    connection.on("onmessage", message => console.log(`received message ${message}`));
})

httpServer.listen(8080, () =>  console.log("listening on port 8080"));