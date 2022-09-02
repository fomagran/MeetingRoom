import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class InvitationController {
  addInvitation = async (req: Request, res: Response) => {
    try {
      const invitation = {
        userId: req.body.userId,
        fromUserId: req.body.fromUserId,
        isReceived: Boolean(req.body.isReceived),
      };

      await prisma.invitation
        .create({
          data: invitation,
        })
        .then((data) => {
          res.json(data);
          console.log("Insert a invitation: ", data);
        });
    } catch (err) {
      console.log("Insert a invitation Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  getAllInvitations = async (req: Request, res: Response) => {
    try {
      await prisma.invitation
        .findMany({
          where: {
            userId: req.params.userId,
          },
          include: { fromUser: true },
        })
        .then((data) => {
          res.json(data);
          console.log("Get all invitations user: ", data);
        });
    } catch (err) {
      console.log("Read all invitations user: Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  deleteInvitation = async (req: Request, res: Response) => {
    console.log(req.params.userId, req.body.fromUser);

    try {
      await prisma.invitation
        .deleteMany({
          where: {
            userId: req.params.userId,
            fromUserId: req.body.fromUserId,
          },
        })
        .then((data) => {
          res.json(data);
          console.log("Delete a invitation user: ", data);
        });
    } catch (err) {
      console.log("Delete a invitation Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };

  updateInvitation = async (req: Request, res: Response) => {
    try {
      await prisma.invitation
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
          console.log("Updated a invitation user: ", data);
        });
    } catch (err) {
      console.log("Update a invitation user Error:", err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  };
}
