const express = require("express");
const {
  uploadFile,
  getFiles,
  getFile,
  updateFile,
  deleteFile,
} = require("../controllers/fileController");
const { upload } = require("../controllers/fileController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/upload",
  verifyToken,
  checkRole(["admin"]),
  upload.single("file"),
  uploadFile
);
router.get("/", verifyToken, getFiles);
router.get("/:id", verifyToken, getFile);
router.put("/:id", verifyToken, checkRole(["admin"]), updateFile);
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteFile);

module.exports = router;
