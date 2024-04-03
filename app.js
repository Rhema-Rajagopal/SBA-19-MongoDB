/* SETUP */
// require statements
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
dotenv.config(); // environment variables (.env)

// Import Schemas
const Conference = require("./db/Comment");
const Team = require("./db/User");
const Game = require("./db/Post");

// Import data to populate database
const comments = require("./data/comments");
const posts = require("./data/posts");
const users = require("./data/users");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routes
app.use("/api/conferences", require("./routes/comments.js"));
app.use("/api/teams", require("./routes/users.js"));
app.use("/api/games", require("./routes/posts.js"));

// Main function:
// listen to port, connect to database, populate database
async function main() {
  portListen();
  connectDB();

  // populate database
  populateDB(comments, Comment);
  populateDB(posts, Post);
  populateDB(users, User);
}

async function addToDB(item, model) {
  try {
    const newItem = await model.create(item);
  } catch (e) {
    console.log(e.message);
  }
}

async function populateDB(array, model) {
  array.forEach((element) => {
    addToDB(element, model);
  });
}

function portListen() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  });
}

// Need connection string
async function connectDB() {
  const URI = "<connectionString>"; // or use .env file
  const conn = mongoose
    .connect(process.env.ATLAS_URI || URI)
    .then(console.log(`Connected!`))
    .catch((e) => console.error(e.message));
}

// Run
main();
