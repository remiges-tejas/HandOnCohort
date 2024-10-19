const mongoose = require("mongoose");

mongoose.connect(
  "YOUR_MONGODB_URL"
);

const todoSchema = mongoose.Schema({
  title: String,
  desc: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
