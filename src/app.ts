import express from "express";
import authRoutes from "./routes/authRoutes";
import userDashboardRoutes from "./routes/userDashboard";
import verifierDashboardRoutes from "./routes/verifier";
import adminDashboardRoutes from "./routes/adminDashboard";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import cors from "cors";




dotenv.config();
AppDataSource; // Initializes the database connection

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/user", userDashboardRoutes);
app.use("/api/verifier", verifierDashboardRoutes);
app.use("/api/admin", adminDashboardRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to Loan Credit Sea");
});

export default app;
