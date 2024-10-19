const data = require("./data.json");

const User = require("./model/userSchema");

async function handleuser(req, res) {
  return res.send(await User.find({}));
}

// username: String,
// password: String,
// age: Number,
// isAdmin: Boolean,

// Method that create the user using body parameter from the user
async function creteUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;
  const isAdmin = req.body.isAdmin;

  const isUserCreated = await User.create({
    username,
    password,
    age,
    isAdmin,
  });

  

  if (isUserCreated) {
    return res.status(201).json({
      msg: "User Created Successfully ",
    });
  } else {
    return res.status(404).json({
      msg: "Something Went Wrong  ",
    });
  }
}
// method that delete all the user
async function deleteAllUser(req, res) {
  const isDeleteStatus = await User.deleteMany({});
  if (isDeleteStatus) {
    return res.status(200).json({
      msg: "All User Deleted Successfully",
    });
  } else {
    return res.json({
      msg: "User Not Deleted : Something Went Wrong",
    });
  }
}

// Logic that finds the user by ID
async function findUserById(req, res) {
  try {
    const id = req.params.id;

    // Assuming _id is used as the unique identifier for User
    const user = await User.findOne({ _id: id });

    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    // Handle errors like an invalid ID format or server issues
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
}

// Logic to update the user by ID
async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;

    // Update the user and return the updated document
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (updatedUser) {
      return res.status(200).json({
        msg: "User updated successfully",
        user: updatedUser,
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
}

module.exports = {
  handleuser,
  creteUser,
  deleteAllUser,
  findUserById,
  updateUser,
};
