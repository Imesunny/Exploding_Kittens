const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  points: { type: Number, default:0},
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
