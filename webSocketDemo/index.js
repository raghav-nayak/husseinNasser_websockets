const http = require('http');
const WebSocketServer = require("websocket").server;


let connection = null;

// http server has a socket 
const httpServer = http.createServer((req, res) => {
    console.log("we have received request");
});

const websocket = new WebSocketServer({
    httpServer
});

websocket.on("request", request => {
    connection = request.accept(null, request.origin);
    connection.on("open", () => {
        console.log("Opened!!");
    });
    connection.on("close", () => console.log("Closed!!"));
    connection.on("message", message => console.log(`received message ${message.utf8Data}`));
    sendEvery5seconds();
});

function sendEvery5seconds() {
    connection.send(`Message ${Math.random()}`);
    setTimeout(sendEvery5seconds, 5000);
}

httpServer.listen(8080, () => console.log("listening on port 8080"));
