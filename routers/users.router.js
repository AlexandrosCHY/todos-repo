import express from "express";
import * as userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/", userController.create);

userRouter.get("/:id", userController.search);

userRouter.get("/", userController.list);

userRouter.patch("/", userController.update);

export default userRouter;
