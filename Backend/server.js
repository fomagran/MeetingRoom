const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3001;

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    let parse = JSON.parse(message);
    let stringify = JSON.stringify(parse);
    socket.emit("message", stringify);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
