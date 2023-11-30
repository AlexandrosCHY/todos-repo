import {
  getAllTodos,
  getTodo,
  createTodo,
  updateCompleted,
  deleteTodo,
} from "../services/todos.services.js";

export const list = async (req, res) => {
  const todos = await getAllTodos();
  res.status(200).json(todos);
};

export const search = async (req, res) => {
  const id = req.params.id;
  const todo = await getTodo(id);
  if (todo) {
    res.status(200).json(todo);
  } else if (id) {
    res.status(400).json({
      message: "Invalid id",
      type: "...",
      code: 400,
    });
  } else {
    res
      .status(404)
      .json({ code: 404, type: "error", message: "Todo not found" });
  }
};

export const create = async (req, res) => {
  const { userId, title, completed } = req.body;
  const newTodo = await createTodo(userId, title, completed);
  if (newTodo) {
    res.status(201).json({ message: "Todo successful created", todo: newTodo });
  } else {
    res.status(400).json({
      message: "Invalid input",
      type: "Todo creating failed",
      code: 400,
    });
  }
};

export const update = async (req, res) => {
  const todoId = req.params.id;
  const { title, completed } = req.body;
  const changedTodo = await updateCompleted(todoId, title, completed);
  try {
    if (changedTodo) {
      res
        .status(200)
        .json({ message: "Update was successful", todo: changedTodo });
    } else if (completed != true || false) {
      res.status(400).json({ code: 400, type: "..", message: "Input invalid" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const destroy = async (req, res) => {
  const todotId = req.params.id;
  const deletedTodo = await deleteTodo(todotId);
  try {
    if (!todotId) {
      res.status(400).json({
        code: 400,
        type: "string",
        message: "Id is not valid",
      });
    } else {
      res.status(200).json({ deleted: deletedTodo });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
