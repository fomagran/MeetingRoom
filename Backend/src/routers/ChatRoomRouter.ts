import express from "express";
import ChatRoomController from "../controllers/ChatRoomController";

const chatRoomRouter = express.Router();

let chatRoomController = new ChatRoomController();

chatRoomRouter.post("/addChatRoom", chatRoomController.addChatRoom);

chatRoomRouter.get("/chatRoom/:id", chatRoomController.getChatRoom);

chatRoomRouter.get("/allChatRooms", chatRoomController.getAllChatRooms);

chatRoomRouter.put("/chatRoom/:id", chatRoomController.updateChatRoom);

chatRoomRouter.delete("/chatRoom/:id", chatRoomController.deleteChatRoom);

export default chatRoomRouter;
