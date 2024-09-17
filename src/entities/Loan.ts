// src/entities/Loan.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  amount!: number;

  @Column()
  duration!: string; // Duration of the loan, e.g., "6 months", "1 year"

  @Column({ default: "pending" })
  status!: "pending" | "approved" | "rejected";

  @ManyToOne(() => User, (user) => user.loans)
  user!: User;
}
