//  { id: 8, name: "Arun" },

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  name: { type: String, required: true },
});

userSchema.statics.findByName = function (name) {
  return this.findOne({ name: new RegExp(name, "i") });
};
userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};
userSchema.methods.updateUser = function () {
  console.log(`${this.name} User updated`);
};

module.exports = mongoose.model("User", userSchema);
