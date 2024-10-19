const mongoose = require("mongoose");

// mongodb-connection-string : mongodb+srv://tejas:mailpass@cluster0.uml1r.mongodb.net/test-users
mongoose.connect(
  "mongodb+srv://tejas:mailpass@cluster0.uml1r.mongodb.net/test-users"
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
