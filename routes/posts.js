const express = require("express");
const router = express.Router();
const posts = require("./data/posts");

const {
  getPosts,
  setPosts,
  getPostsByName,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/").get(getPosts).post(setPosts);

router.route("/:name").get(getPostsByName).patch(updatePost).delete(deletePost);

module.exports = router;

// router.get("/", (req, res) => {
//   // Assuming you have posts data available
//   let posts = [
//     { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
//     { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
//   ];
//   // Render the index view and pass posts data to it
//   res.render("index", { posts });
// });
// let posts = [
//   { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
//   { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
// ];

// // Get all posts or filter by userId if provided in query parameters
// // router.get("/", (req, res) => {
// //   const { userId } = req.query;
// //   if (userId) {
// //     const filteredPosts = posts.filter(
// //       (post) => post.userId === parseInt(userId)
// //     );
// //     res.json(filteredPosts);
// //   } else {
// //     res.json(posts);
// //   }
// // });

// // Create a new post
// router.post("/", (req, res) => {
//   const newPost = req.body;

//   // Generate a new unique ID (You can use libraries like 'uuid' for production)
//   newPost.id = posts.length + 1;
//   posts.push(newPost);
//   res.status(201).json(newPost);
// });
// // POST USER - create a new user

// router.post("/", (req, res) => {
//   if (req.body.userId && req.body.body && req.body.title) {
//     if (posts.find((u) => u.userId == req.body.userId)) {
//       res.json({ error: `UserID already taken` });
//       return;
//     }

//     const newUser = {
//       id: posts[posts.length - 1].id + 1,
//       userId: req.body.userId,
//       body: req.body.body,
//       title: req.body.title,
//     };

//     posts.push(newUser);
//     res.json(posts[posts.length - 1]);
//   } else {
//     res.json({ error: "Insufficient Data" });
//   }
// });

// // Get a post by ID
// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === id);
//   if (post) {
//     res.json(post);
//   }
//   // lesson errror handling Middleware
//   else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// module.exports = router;
