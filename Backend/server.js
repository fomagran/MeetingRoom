const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3001;

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
