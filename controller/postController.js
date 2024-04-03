const asyncHandler = require("express-async-handler");
const User = require("../db/Post");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

const setPost = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error(`Post title is required`);
  }

  const posts = await User.create({
    title: req.body.title,
    body: req.body.body,
  });
  res.status(200).json(posts);
});

const getPostsByName = asyncHandler(async (req, res) => {
  const posts = await Post.findByName(req.params.name);
  if (!posts) {
    res.status(400);
    throw new Error(`Conference not found: ${req.params.name}`);
  }
  res.status(200).json(posts);
});

const updatePost = asyncHandler(async (req, res) => {
  const posts = await Post.findByName(req.params.name);
  if (!posts) {
    res.status(400);
    throw new Error(`Post not found:${req.params.name}`);
  }

  const updatePost = await Post.findByIdAndUpdate(posts._id, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
});

const deletePost = asyncHandler(async (req, res) => {
  const posts = await Post.findByName(req.params.name);
  if (!posts) {
    res.status(400);

    throw new Error(` Post title is  not found: ${req.params.name}`);
  }

  await User.deleteOne({ name: req.params.name });
  res
    .status(200)
    .json({ message: `${req.params.name} Post title is  deleted` });
});

module.exports = {
  getPosts,
  setPost,
  getPostsByName,
  updatePost,
  deletePost,
};
