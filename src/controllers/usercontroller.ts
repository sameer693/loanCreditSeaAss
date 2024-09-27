// src/controllers/userController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Loan } from "../entities/Loan";
import { User } from "../entities/User";

export const applyForLoan = async (req: Request, res: Response) => {
  const { amount, duration } = req.body;
  const user = req.user as User;

  const loanRepo = AppDataSource.getRepository(Loan);

  try {
    const loan = new Loan();
    loan.amount = amount;
    loan.duration = duration;
    loan.user = user;

    await loanRepo.save(loan);
    res.status(201).json({ message: "Loan application submitted", loan });
  } catch (error) {
    res.status(500).json({ message: "Error applying for loan", error });
  }
};

export const getUserLoans = async (req: Request, res: Response) => {
  const user = req.user as User;
  const loanRepo = AppDataSource.getRepository(Loan);

  try {
    const loans = await loanRepo.find({ where: { user } });
    res.status(200).json(loans);
  } catch (error) {
    // res.send(res.statusCode).json({ message: "Error fetching user loans", error });
    res.status(500).json({ message: "Error fetching loan history", error });
  }
};
