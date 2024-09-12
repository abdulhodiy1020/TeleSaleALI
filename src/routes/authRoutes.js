const express = require("express");
const {
  register,
  login,
  requestPasswordReset,
  resetPassword,
} = require("../controllers/authController");
const { validateUser } = require("../middlewares/validation");

const router = express.Router();

router.post("/register", validateUser, register);
router.post("/login", login);
router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);

module.exports = router;
