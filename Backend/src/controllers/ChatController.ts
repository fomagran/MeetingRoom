import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ChatController {
  addChat = async (req: Request, res: Response) => {
    try {
      const chat = {
        content: req.body.content,
        isImage: req.body.isImage,
        type: req.body.type,
        userId: req.body.userId,
        chatRoomId: req.body.chatRoomId,
      };

      await prisma.chat
        .create({
          data: chat,
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a chat: ", data);
        });
    } catch (err) {
      console.log("Insert a chat Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getChat = async (req: Request, res: Response) => {
    try {
      await prisma.chat
        .findUnique({
          where: {
            id: req.params.id,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a chat: ", data);
        });
    } catch (err) {
      console.log("Read a chat Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllChats = async (req: Request, res: Response) => {
    try {
      await prisma.chat.findMany().then((data) => {
        res.json(data);
        console.log("Get all chats: ", data);
      });
    } catch (err) {
      console.log("Read a all chats Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteChat = async (req: Request, res: Response) => {
    try {
      await prisma.chat
        .deleteMany({
          where: {
            id: {
              equals: req.params.id,
            },
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete chat: ", data);
        });
    } catch (err) {
      console.log("Delete a chat Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateChat = async (req: Request, res: Response) => {
    try {
      await prisma.chat
        .updateMany({
          where: {
            id: {
              equals: req.params.id,
            },
          },
          data: req.body,
        })
        .then((data) => {
          res.json(data);
          console.log("Updated a chat: ", data);
        });
    } catch (err) {
      console.log("Update a chat Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
