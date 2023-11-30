import * as db from "./db.services.js";

export const createUser = async (
  firstName,
  lastName,
  email,
  password,
  phone,
  address
) => {
  const result = await db.query(
    "INSERT INTO users(first_name, last_name, email, password, phone, addresses) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
    [firstName, lastName, email, password, phone, address]
  );
  return result.rows[0];
};

export const getUser = async (userId) => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [userId]);
  return result.rows[0];
};
export const getUsers = async () => {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
};

export const updateUser = async (
  userId,
  firstName,
  lastName,
  email,
  password,
  phone,
  address
) => {
  const result = await db.query(
    "UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, phone = $5, addresses = $6 WHERE id = $7 RETURNING *",
    [firstName, lastName, email, password, phone, address, userId]
  );
  return result.rows[0];
};
