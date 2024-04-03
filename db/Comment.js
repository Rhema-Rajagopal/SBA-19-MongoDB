const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  postId: {
    type: mongoose.SchemaTypes.ObjectId,
    reuired: true,
  },
  body: {
    type: String,
    required: true,
  },
});
// let comments = [
//   { id: 1, postId: 1, body: "Comment 1 on post 1" },
//   { id: 2, postId: 1, body: "Comment 2 on post 1" },
//   { id: 3, postId: 2, body: "Comment 1 on post 2" },
// ];

commentSchema.statics.findByName = function (title) {
  return this.findOne({ body: new RegExp(body, "i") });
};
commentSchema.query.byName = function (body) {
  return this.where({ body: new RegExp(body, "i") });
};

commentSchema.methods.updateComment = function () {
  console.log(`Comment ${this.body} updated`);
};
module.exports = mongoose.model("Comment", commentSchema);
