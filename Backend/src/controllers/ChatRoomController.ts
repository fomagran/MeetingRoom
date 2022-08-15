import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ChatRoomController {
  addChatRoom = async (req: Request, res: Response) => {
    try {
      const chatRoom = {
        title: req.body.title,
        userId: req.body.userId,
        chatId: req.body.chatId,
      };

      await prisma.chatRoom
        .create({
          data: chatRoom,
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a chatRoom: ", data);
        });
    } catch (err) {
      console.log("Insert a chatRoom Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getChatRoom = async (req: Request, res: Response) => {
    try {
      await prisma.chatRoom
        .findUnique({
          where: {
            id: req.params.id,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a chatRoom: ", data);
        });
    } catch (err) {
      console.log("Read a chatRoom Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllChatRooms = async (req: Request, res: Response) => {
    try {
      await prisma.chatRoom.findMany().then((data) => {
        res.json(data);
        console.log("Get all chatRooms: ", data);
      });
    } catch (err) {
      console.log("Read a all chatRooms Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteChatRoom = async (req: Request, res: Response) => {
    try {
      await prisma.chatRoom
        .deleteMany({
          where: {
            id: {
              equals: req.params.id,
            },
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete chatRoom: ", data);
        });
    } catch (err) {
      console.log("Delete a chatRoom Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateChatRoom = async (req: Request, res: Response) => {
    console.log("Body!!!!!!", req.body);

    try {
      await prisma.chatRoom
        .update({
          where: {
            id: req.body.id,
          },
          data: {
            lastChatContent: req.body.lastChatContent,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Updated a chatRoom: ", data);
        });
    } catch (err) {
      console.log("Update a chatRoom Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
