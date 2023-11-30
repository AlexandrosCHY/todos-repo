import express from "express";
import todosRouter from "./routers/todos.router.js";
import usersRouter from "./routers/users.router.js";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/todos", todosRouter);

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
