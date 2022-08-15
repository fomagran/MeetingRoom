import express from "express";
import { Message } from "./models/Message";
import chatRoomRouter from "./routers/ChatRoomRouter";
import chatRouter from "./routers/ChatRouter";
import userRouter from "./routers/UserRouter";

const app = express();
app.use(express.json());
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use("/api", chatRouter);
app.use("/api", userRouter);
app.use("/api", chatRoomRouter);

const chat = io.of("/chat");
const chatRoom = io.of("/chatRoom");

chat.on("connection", function (socket: any) {
  socket.on("welcome", (message: Message) => {
    socket.join(message.room);
    chat.in(message.room).emit("welcome", message);
  });

  socket.on("message", (message: Message) => {
    chat.in(message.room).emit("message", message);
  });

  socket.on("leave", (message: Message) => {
    socket.leave(message.room);
    chat.in(message.room).emit("leave", message);
  });
});

chatRoom.on("connection", function (socket: any) {
  socket.on(
    "lastChat",
    (lastChat: { chatRoomId: string; lastChatContent: string }) => {
      chatRoom.emit("lastChat", lastChat);
    }
  );
});

http.listen(3001, function () {
  console.log("listening on:3001");
});
