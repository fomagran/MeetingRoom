const db = require("../models");

const Chat = db.chats;

const addChat = async (req, res) => {
  let info = {
    userId: req.body.userId,
    content: req.body.content,
  };

  const chat = await Chat.create(info).catch((err) => console.log(err));
  res.status(200).send(chat);
};

const getAllChats = async (req, res) => {
  let chats = await Chat.findAll({}).catch((err) => console.log(err));
  res.status(200).send(chats);
};

const getSingleChat = async (req, res) => {
  let id = req.params.id;
  let chat = await Chat.findOne({ where: { id: id } }).catch((err) =>
    console.log(err)
  );
  res.status(200).send(chat);
};

const updateChat = async (req, res) => {
  let id = req.params.id;
  const chat = await Chat.update(req.body, { where: { id: id } }).catch((err) =>
    console.log(err)
  );
  res.status(200).send(chat);
};

const deleteChat = async (req, res) => {
  let id = req.params.id;
  await Chat.destroy({ where: { id: id } }).catch((err) => console.log(err));
  res.status(200).send("Chat is deleted");
};

module.exports = {
  addChat,
  getAllChats,
  updateChat,
  getSingleChat,
  deleteChat,
};
