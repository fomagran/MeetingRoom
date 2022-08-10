import express from "express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();

let userController = new UserController();

userRouter.post("/addUser", userController.addUser);

userRouter.get("/user/:id", userController.getUser);

userRouter.get("/allUsers", userController.getAllUsers);

userRouter.put("/user/:id", userController.updateUser);

userRouter.delete("/user/:id", userController.deleteUser);

export default userRouter;
