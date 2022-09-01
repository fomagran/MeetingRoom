import express from "express";
import InvitationController from "../controllers/InvitationController";

const invitationRouter = express.Router();

let invitationController = new InvitationController();

invitationRouter.post("/addInvitation", invitationController.addInvitation);

invitationRouter.get(
  "/invitations/:userId",
  invitationController.getAllInvitations
);

invitationRouter.put(
  "/invitations/:userId",
  invitationController.updateInvitation
);

invitationRouter.delete(
  "/invitations/:userId",
  invitationController.deleteInvitation
);

export default invitationRouter;
