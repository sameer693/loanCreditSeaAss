// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Loan } from "./Loan";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: 'user' })
  role!: 'user' | 'verifier' | 'admin';

  @OneToMany(() => Loan, (loan) => loan.user)
  loans!: Loan[];
}
