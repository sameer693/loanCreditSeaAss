// src/routes/verifierDashboardRoutes.ts
import { Router } from "express";
import { getPendingLoans, verifyLoan } from "../controllers/verifiercontroller";
import { authenticateToken, authorizeRole } from "../middleware/auth";

const router = Router();

router.get("/pending-loans", authenticateToken, authorizeRole('verifier'), getPendingLoans);
router.post("/verify-loan", authenticateToken, authorizeRole('verifier'), verifyLoan);

export default router;
