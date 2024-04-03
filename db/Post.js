const { default: mongoose } = require("mongoose");

const mongoose = new mongoose.Schema({
  //     let posts = [
  //         //     { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
  //         //     { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
  //         //   ];
  // });

  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },

  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },

  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },

  body: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

postSchema.statics.findByname = function (title) {
  return this.findOne({ title: new RegExp(title, "i") });
};

postSchema.query.byName = function (name) {
  return this.where({ title: new RegExp(name, "i") });
};

postSchema.methods.updatePost = function () {
  console.log(`Post ${this._id} updated.`);
};

module.exports = mongoose.model("Post", postSchema);
