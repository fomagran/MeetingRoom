import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class UserController {
  addUser = async (req: Request, res: Response) => {
    try {
      const user = {
        name: req.body.name,
        profileImage: req.body.profileImage,
        department: req.body.department,
        role: req.body.role,
      };

      await prisma.user
        .create({
          data: user,
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a user: ", data);
        });
    } catch (err) {
      console.log("Insert a user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      await prisma.user
        .findUnique({
          where: {
            id: req.params.id,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a user: ", data);
        });
    } catch (err) {
      console.log("Read a user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getUserByName = async (req: Request, res: Response) => {
    try {
      await prisma.user
        .findFirst({
          where: {
            name: req.params.name,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Get a user by name: ", data);
        });
    } catch (err) {
      console.log("Read a user by name Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      await prisma.user.findMany().then((data) => {
        res.json(data);
        console.log("Get all users: ", data);
      });
    } catch (err) {
      console.log("Read a all users Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      await prisma.user
        .deleteMany({
          where: {
            id: {
              equals: req.params.id,
            },
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete user: ", data);
        });
    } catch (err) {
      console.log("Delete a user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      await prisma.user
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
          console.log("Updated a user: ", data);
        });
    } catch (err) {
      console.log("Update a user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
