// src/controllers/verifierController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Loan } from "../entities/Loan";

export const getPendingLoans = async (req: Request, res: Response) => {
  const loanRepo = AppDataSource.getRepository(Loan);

  try {
    const loans = await loanRepo.find({ where: { status: "pending" } });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending loans", error });
  }
};

export const verifyLoan = async (req: Request, res: Response) => {
  const { loanId, status } = req.body;
  const loanRepo = AppDataSource.getRepository(Loan);

  try {
    const loan = await loanRepo.findOneBy({ id: loanId });
    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    loan.status = status;
    await loanRepo.save(loan);

    res.status(200).json({ message: "Loan status updated", loan });
  } catch (error) {
    res.status(500).json({ message: "Error updating loan status", error });
  }
};
