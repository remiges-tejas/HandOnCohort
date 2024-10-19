const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  isAdmin: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
