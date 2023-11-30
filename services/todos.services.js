import * as db from "./db.services.js";

export const getAllTodos = async () => {
  const result = await db.query("SELECT * FROM todos");
  return result.rows;
};

export const getTodo = async (id) => {
  const result = await db.query("SELECT * FROM todos WHERE id = $1", [id]);
  return result.rows[0];
};

export const createTodo = async (userId, title, completed) => {
  const result = await db.query(
    "INSERT INTO todos(user_id, title, completed) VALUES($1,$2,$3) RETURNING *",
    [userId, title, completed]
  );
  return result.rows[0];
};

export const updateCompleted = async (todoId, title, completed) => {
  const result = await db.query(
    "UPDATE todos SET completed = $1, title = $2 WHERE id = $3 RETURNING *",
    [completed, title, todoId]
  );
  return result.rows[0];
};

export const deleteTodo = async (id) => {
  const result = await db.query("DELETE FROM todos WHERE id = $1 RETURNING *", [
    id,
  ]);
  return result.rows;
};
