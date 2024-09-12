const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, checkRole(["admin"]), createUser);
router.get("/", verifyToken, checkRole(["admin"]), getUsers);
router.get("/:id", verifyToken, checkRole(["admin"]), getUser);
router.put("/:id", verifyToken, checkRole(["admin"]), updateUser);
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteUser);

module.exports = router;
