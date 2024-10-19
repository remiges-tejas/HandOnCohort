const express = require("express");
const router = express.Router();

const {
  handleuser,
  creteUser,
  deleteAllUser,
  findUserById,
  updateUser,
} = require("./controller"); // Destructure to get individual functions

router.get("/usr", handleuser);
router.post("/usr", creteUser);
router.put("/usr/:id", updateUser);
router.delete("/usr", deleteAllUser);
router.get("/usr/:id", findUserById);

module.exports = router;
