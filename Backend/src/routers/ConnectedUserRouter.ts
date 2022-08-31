import express from "express";
import ConnectedUserController from "../controllers/ConnectedUserController";

const connectedUserRouter = express.Router();

let connectedUserController = new ConnectedUserController();

connectedUserRouter.post("/addConnectedUser", connectedUserController.addUser);

connectedUserRouter.get(
  "/connectedUser/:userId",
  connectedUserController.getAllConnectedUserById
);

connectedUserRouter.put(
  "/connectedUser/:userId",
  connectedUserController.updateUser
);

connectedUserRouter.delete(
  "/connectedUser/:userId",
  connectedUserController.deleteUser
);

export default connectedUserRouter;
