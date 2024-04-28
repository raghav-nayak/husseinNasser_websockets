import redis from "redis";
import ws from "websocket";

const APPID = process.env.APPID;
let connections = [];
const WebSocketServer = ws.server;

const subscriber = redis.createClient({
    port: 6379,
    host: "rds"
});

const publisher = redis.createClient({
    port: 6379,
    host: "rds"
});

subscriber.on("subscribe", (channel, count) => {
    console.log(`Server ${APPID} subscribed successfully to livechat`);
    publisher.publish("livechat", "a message");
});

subscriber.on("message", (channel, message) => {
    try {
        console.log(`Server ${APPID} received message in channel ${channel}`);
        // loop through all websocket connections and send the message to the subscribers
        connections.forEach(connection => connection.send(APPID + ":" + message));
    } catch (ex) {
        console.error(`Error: ${ex}`)
    }
});

subscriber.subscribe("livechat");

// create a raw server (help us to create the TCP )
const httpServer = http.createServer();

// pass the httpServer object to WebSocketServer library to do
const webSocket = new WebSocketServer({
    "httpServer": httpServer
});

httpServer.listen(8080, () => console.log("My server is listening on 8080"));


// when a legit websocket request comes, listen to it and get the connection
webSocket.on("request", request => {
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened connection"));
    connection.on("close", () => console.log("closed connection"));
    connection.on("message", message => {
        console.log(`${APPID}: Received message ${message.utf8Data}`);
        publisher.publish("livechat", message.utf8Data);
    });
    setTimeout(() => connection.send(`Connected successfully to server ${APPID}`), 5000);
    connections.push(connection)
});