const express = require("express");
const {
  createRole,
  getRoles,
  getRole,
  updateRole,
  deleteRole,
} = require("../controllers/roleController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, checkRole(["admin"]), createRole);
router.get("/", verifyToken, checkRole(["admin"]), getRoles);
router.get("/:id", verifyToken, checkRole(["admin"]), getRole);
router.put("/:id", verifyToken, checkRole(["admin"]), updateRole);
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteRole);

module.exports = router;
