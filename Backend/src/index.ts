import express from "express";

const app = express();
app.use(express.json());

let http = require("http").Server(app);

let io = require("socket.io")(http);

io.on("connection", function (socket: any) {
  console.log("a user connected");
  socket.on("message", (message: any) => {
    console.log(message);
    io.emit("message", message);
  });

  socket.on("welcome", (message: any) => {
    console.log(message);
    io.emit("welcome", message);
  });
});

http.listen(3001, function () {
  console.log("listening on *:3001");
});
