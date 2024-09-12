const { Router } = require("express");

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const roleRoutes = require("./roleRoutes");
const fileRoutes = require("./fileRoutes");
const productRoutes = require("./productRoutes");

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/files", fileRoutes);
router.use("/products", productRoutes);


module.exports = router;