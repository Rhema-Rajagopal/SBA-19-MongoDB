const asyncHandler = require("express-async-handler");
const User = require("../db/User");

const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const setUser = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);

    throw new Error("User ID is required");
  }

  const users = await User.create({
    id: req.body.id,
    name: req.body.name,
  });

  res.status(200).json(users);
});

const getUserByName = asyncHandler(async (req, res) => {
  const users = await User.findByName(req.params.name);

  if (!users) {
    res.status(400);
    throw new Error(`User not found:${req.params.name}`);
  }

  res.status(200).json(users);
});

const updatedUser = asyncHandler(async (req, res) => {
  const users = await User.findByName(req.params.name);
  if (!users) {
    res.status(400);
    throw new Error(`User not found: ${req.params.name}`);
  }
  const updatedUser = await User.findByIdAndUpdate(users._id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const users = await User.findByName(req.params.name);
  if (!users) {
    res.status(400);
    throw new Error(` User not found: ${req.params.name}`);
  }

  await User.deleteOne({ name: req.params.name });
  res.status(200).json({ message: `${req.params.name} User deleted` });
});

module.exports = {
  getUsers,
  setUser,
  getUserByName,
  updateUser,
  deleteUser,
};
