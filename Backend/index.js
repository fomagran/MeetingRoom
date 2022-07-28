const express = require("express");
const app = express();
const WebSocket = require("ws");
const http = require("http");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3001;

wss.broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on("connection", () => {
  wss.broadcast(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`);
});

wss.on("message", (message) => {
  let parse = JSON.parse(message);
  let stringify = JSON.stringify(parse);
  wss.broadcast(stringify);
});

wss.on("close", () => {
  wss.broadcast(`유저가 떠났습니다.  현재 유저 ${wss.clients.size} 명`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => console.log(`Server running on ${port}`));
