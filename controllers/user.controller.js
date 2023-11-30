import {
  createUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user.services.js";

export const create = async (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body;
  const newUser = await createUser(
    firstName,
    lastName,
    email,
    password,
    phone,
    address
  );
  if (!newUser) {
    res.status(400).json({
      code: 400,
      type: "User not created",
      message: "Not valid input",
    });
  } else {
    res.status(201).json(newUser);
  }
};

export const search = async (req, res) => {
  const userId = req.params.id;
  const user = await getUser(userId);
  try {
    if (!user) {
      res.status(404).json({
        code: 404,
        type: "Wrong ID error",
        message: "ID is invalid",
      });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      type: "Something went wrong..",
      message: err.message,
    });
  }
};

export const list = async (req, res) => {
  const users = await getUsers();

  try {
    if (!users) {
      res.status(404).json({
        code: 404,
        type: "Can't get users",
        message: "Invalid params",
      });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(400).json({
      code: 400,
      type: "Something went wrong..",
      message: err.message,
    });
  }
};

export const update = async (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body;
  const userId = req.params.id;
  const userUpdate = await updateUser(
    userId,
    firstName,
    lastName,
    email,
    password,
    phone,
    address
  );
  try {
    if (!userUpdate) {
      res.status(400).json({
        code: 400,
        type: "User not updated",
        message: "Not valid input",
      });
    } else {
      res
        .status(201)
        .json({ message: "Update was successful", user: userUpdate });
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
