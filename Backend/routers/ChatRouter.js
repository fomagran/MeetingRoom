const chatController = require("../controllers/ChatController.js");

const router = require("express").Router();

router.post("/addChat", chatController.addChat);

router.get("/allChats", chatController.getAllChats);

router.post("/:id", chatController.getSingleChat);

router.put("/:id", chatController.updateChat);

router.delete("/:id", chatController.deleteChat);

module.exports = router;
