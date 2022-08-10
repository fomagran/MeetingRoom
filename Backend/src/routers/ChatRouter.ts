import express from "express";
import ChatController from "../controllers/ChatController";

const chatRouter = express.Router();

let chatController = new ChatController();

chatRouter.post("/addChat", chatController.addChat);

chatRouter.get("/chat/:id", chatController.getChat);

chatRouter.get("/allChats", chatController.getAllChats);

chatRouter.put("/chat/:id", chatController.updateChat);

chatRouter.delete("/chat/:id", chatController.deleteChat);

export default chatRouter;
