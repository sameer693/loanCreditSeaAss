// src/routes/adminDashboardRoutes.ts
import { Router } from "express";
import { getAllUsers, getAllLoans } from "../controllers/admincontroller";
import { authenticateToken, authorizeRole } from "../middleware/auth";

const router = Router();

router.get("/users", authenticateToken, authorizeRole('admin'), getAllUsers);
router.get("/loans", authenticateToken, authorizeRole('admin'), getAllLoans);

export default router;
