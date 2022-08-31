import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ConnectedUserController {
  addUser = async (req: Request, res: Response) => {
    try {
      const connectUser = {
        userId: req.body.userId,
        connectedUserId: req.body.connectedUserId,
      };

      const connectedUser = {
        userId: req.body.connectedUserId,
        connectedUserId: req.body.userId,
      };

      await prisma.connectedUsers
        .createMany({
          data: [connectUser, connectedUser],
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a connected user: ", data);
        });
    } catch (err) {
      console.log("Insert a connected user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllConnectedUserById = async (req: Request, res: Response) => {
    try {
      await prisma.connectedUsers
        .findFirst({
          where: {
            userId: req.params.userId,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a connected user by name: ", data);
        });
    } catch (err) {
      console.log("Read a connected user by name Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      await prisma.connectedUsers
        .deleteMany({
          where: {
            userId: {
              equals: req.params.userId,
            },
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete connected user: ", data);
        });
    } catch (err) {
      console.log("Delete a connected user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      await prisma.connectedUsers
        .updateMany({
          where: {
            userId: {
              equals: req.params.userId,
            },
          },
          data: req.body,
        })
        .then((data) => {
          res.json(data);
          console.log("Updated a connected user: ", data);
        });
    } catch (err) {
      console.log("Update a connected user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
