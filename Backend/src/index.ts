import express from "express";
import { Message } from "./models/Message";

const app = express();
app.use(express.json());

let http = require("http").Server(app);

let io = require("socket.io")(http);

const chatRoom = io.of("/chatRoom");

chatRoom.on("connection", function (socket: any) {
  socket.on("welcome", (message: Message) => {
    socket.join(message.room);
    chatRoom.in(message.room).emit("welcome", message);
  });

  socket.on("message", (message: Message) => {
    console.log(message.user, message.room);
    chatRoom.in(message.room).emit("message", message);
  });

  socket.on("leave", (message: Message) => {
    socket.leave(message.room);
    chatRoom.in(message.room).emit("leave", message);
  });
});

http.listen(3001, function () {
  console.log("listening on:3001");
});
