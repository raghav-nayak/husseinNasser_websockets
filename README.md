 This notes and examples are from Hussein Nasser's Websocket course. link: https://www.youtube.com/watch?v=XgFzHXOk8IQ

### WebSocket is a bidirectional communication protocol between client and server over the web.

- bidirectional communication protocol between client and server over the web
- standardized in 2011
- completely compatible with HTTP
- stateful
- built on HTTP 1.1
- it is a stateful
- once the connection is established, either client or server can send data.
- persistent connection
- you can create your own WebSocket or you can use WebSocket library

## WebSockets pros and cons

#### Pros
- full-duplex (no polling)
- HTTP compatible
- firewall friendly (standard)

#### Cons
- proxying is tricky
- level 7 load balancing is challenging (timeouts)
- stateful, difficult to horizontally scale -> solution is to store the state in db and read if server restarts or client disconnects 
- server does not know whether client is disconnected or not

<hr>


**Chapters**
1. What is HTTP?
2. What is a Web Server?
3. Introduction to WebSockets
4. Scaling WebSockets
5. Securing WebSockets
6. Multi-player Game Design with WebSockets 
7. Multi-Player Game Building with WebSockets 
8. Advanced WebSockets
