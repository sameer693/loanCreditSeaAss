// src/controllers/adminController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";
import { Loan } from "../entities/Loan";

export const getAllUsers = async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);

  try {
    const users = await userRepo.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const getAllLoans = async (req: Request, res: Response) => {
  const loanRepo = AppDataSource.getRepository(Loan);

  try {
    const loans = await loanRepo.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching loans", error });
  }
};
