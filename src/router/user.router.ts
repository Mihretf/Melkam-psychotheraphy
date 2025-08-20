import { Router } from "express";
import {
  register,
  login,
  verifyEmail,
  refreshToken,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/register", register);
router.post("/verify", verifyEmail);
router.post("/login", login);
router.post("/refresh", refreshToken); // <-- changed to POST
router.post("/forgot-password", forgotPassword);
router.post("/reset", resetPassword);

// Protected routes
router.get("/admin", authenticate, authorize(["ADMIN"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

export default router;
