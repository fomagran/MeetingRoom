import express from "express";

const app = express();
app.use(express.json());

app.set("port", 3000);

let http = require("http").Server(app);

let io = require("socket.io")(http);

io.on("connection", function (socket: any) {
  console.log("a user connected");
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
