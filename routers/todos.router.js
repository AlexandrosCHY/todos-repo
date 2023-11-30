import express from "express";
import * as todosController from "../controllers/todos.controllers.js";

const todosRouter = express.Router();

todosRouter.get("/", todosController.list);

todosRouter.get("/:id", todosController.search);

todosRouter.post("/", todosController.create);

todosRouter.patch("/:id", todosController.update);

todosRouter.delete("/:id", todosController.destroy);

export default todosRouter;
