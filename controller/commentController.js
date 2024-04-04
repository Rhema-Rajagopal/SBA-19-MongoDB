const asyncHandler = require("express-async-handler");
const Comment = require("../db/User");

const getUser = asyncHandler(async (req, res) => {
  const comments = await Comment.find();
  res.status(200).json(comments);
});

const setComment = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);

    throw new Error("User ID is required");
  }

  const comments = await Comment.create({
    id: req.body.id,
    name: req.body.name,
  });

  res.status(200).json(users);
});

const getCommentByName = asyncHandler(async (req, res) => {
  const comments = await Comment.findByName(req.params.name);

  if (!comments) {
    res.status(400);
    throw new Error(`Comment not found:${req.params.name}`);
  }

  res.status(200).json(comments);
});

const updateComment = asyncHandler(async (req, res) => {
  const comments = await User.findByName(req.params.name);
  if (!comments) {
    res.status(400);
    throw new Error(`Comment not found: ${req.params.name}`);
  }
  const updatedComment = await User.findByIdAndUpdate(comments._id, req.body, {
    new: true,
  });
  res.status(200).json(updatedComment);
});

const deleteComment = asyncHandler(async (req, res) => {
  const comments = await User.findByName(req.params.name);
  if (!comments) {
    res.status(400);
    throw new Error(` Comment not found: ${req.params.name}`);
  }

  await Comment.deleteOne({ name: req.params.name });
  res.status(200).json({ message: `${req.params.name} Comment deleted` });
});

module.exports = {
  getComments,
  setComment,
  getCommentByName,
  updateComment,
  deleteComment,
};
