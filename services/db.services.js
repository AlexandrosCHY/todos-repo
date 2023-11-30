import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

export const query = (text, params) => pool.query(text, params);
