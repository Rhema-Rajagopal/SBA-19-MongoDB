const express = require("express");
const router = express.Router();

const Comments = require("../data/comments");

const {
  getComments,
  setComments,
  getCommentsById,
  updateComments,
  deleteComments,
} = require("../controllers/commentController");

router.route("/").get(getComments).post(setComments);

router
  .route("/:name")
  .get(getCommentsById)
  .patch(updateComments)
  .delete(deleteComments);

module.exports = router;

// let comments = [
//   { id: 1, postId: 1, body: "Comment 1 on post 1" },
//   { id: 2, postId: 1, body: "Comment 2 on post 1" },
//   { id: 3, postId: 2, body: "Comment 1 on post 2" },
// ];

// // Create a new comment
// router.post("/", (req, res) => {
//   const newComment = req.body;
//   // Generate a new unique ID (You can use libraries like 'uuid' for production)
//   newComment.id = comments.length + 1;
//   comments.push(newComment);
//   res.status(201).json(newComment);
// });

// //Get all comments

// router.get("/", (req, res) => {
//   res.json(comments);
// });

// //get comments by id

// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const comment = comments.find((comment) => comment.id === id);
//   if (comment) {
//     res.json(comment);
//   }
//   // lesson errror handling Middleware
//   else {
//     res.status(404).json({ message: "Comments not found" });
//   }
// });

// module.exports = router;
