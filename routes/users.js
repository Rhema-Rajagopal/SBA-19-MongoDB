const express = require("express");
const router = express.Router();
const users= require('../data/users')

{
  getUsers,
  setUsers,
  getUsersByName,
  updateUser,
  deleteUser,
} = require("../controllers/postController");


router.route('/')
  .get(getUsers)
  .post(setUsers)

router.route('/:name')
  .get(getUsersByName)
  .patch(updateUser)
  .delete(deleteUser)
  
module.exports = router;
// router.use(logger);

// router.get("/new", (req, res) => {
//   res.render("users/new");
// });

// router.post("/", (req, res) => {
//   const isValid = false;
//   if (isValid) {
//     users.push({ firstName: req.body.firstName });
//     res.redirect(`/users/${users.length - 1}`);
//   } else {
//     console.log("Error");
//     res.render("users/new", { firstName: req.body.firstName });
//   }
// });

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

// let users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// // Get all users
// router.get("/", (req, res) => {
//   res.json(users);
// });
// // Create a new user
// // router.post("/", (req, res) => {
// //   const newUser = req.body;
// //   // Generate a new unique ID (You can use libraries like 'uuid' for production)
// //   newUser.id = users.length + 1;
// //   users.push(newUser);
// //   res.status(201).json(newUser);
// // });
// // Delete a user by ID
// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = users.findIndex((user) => user.id === id);
//   if (index !== -1) {
//     users.splice(index, 1);
//     res.sendStatus(204); // No content
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// // Get a user by ID
// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (user) {
//     res.json(user);
//   }
//   // // lesson errror handling Middleware
//   else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// //patch

// router.patch("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIndex = users.findIndex((user) => user.id === id);

//   if (userIndex !== -1) {
//     const updatedUser = req.body;
//     users[userIndex] = { ...users[userIndex], ...updatedUser };
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// module.exports = router;
