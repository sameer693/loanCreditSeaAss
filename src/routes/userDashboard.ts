// src/routes/userDashboardRoutes.ts
import { Router } from "express";
import { applyForLoan, getUserLoans } from "../controllers/usercontroller";
import { authenticateToken, authorizeRole } from "../middleware/auth";

const router = Router();

router.post("/apply-loan", authenticateToken, authorizeRole('user'), applyForLoan);
router.get("/loans", authenticateToken, authorizeRole('user'), getUserLoans);

export default router;
