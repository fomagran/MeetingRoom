import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ReadMessageController {
  addReadDates = async (req: Request, res: Response) => {
    try {
      const readMessage = {
        userId: req.body.userId,
        chatRoomId: req.body.chatRoomId,
        readDate: req.body.readDate,
      };

      await prisma.readDates
        .create({
          data: readMessage,
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a Read Message: ", data);
        });
    } catch (err) {
      console.log("Insert a Read Message Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllReadDates = async (req: Request, res: Response) => {
    try {
      await prisma.readDates
        .findMany({
          where: {
            userId: req.params.userId,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a All Read Message: ", data);
        });
    } catch (err) {
      console.log("Read a Read Message Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateReadDates = async (req: Request, res: Response) => {
    try {
      await prisma.readDates
        .updateMany({
          where: {
            userId: {
              equals: req.body.userId,
            },
            chatRoomId: {
              equals: req.body.chatRoomId,
            },
          },
          data: {
            readDate: req.body.readDate,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Updated a Read Message: ", data);
        });
    } catch (err) {
      console.log("Update a Read Message Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteReadDates = async (req: Request, res: Response) => {
    try {
      await prisma.readDates
        .deleteMany({
          where: {
            chatRoomId: {
              equals: req.params.chatRoomId,
            },
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete a Read Message: ", data);
        });
    } catch (err) {
      console.log("Delete a Read Message Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
