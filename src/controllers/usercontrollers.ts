// src/controllers/userController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  const userRepo = AppDataSource.getRepository(User);

  try {
    // Check if user already exists
    const existingUser = await userRepo.findOneBy({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hit')
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.role = role || "user";

    await userRepo.save(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Login a user and generate a JWT token
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userRepo = AppDataSource.getRepository(User);

  try {
    // Find the user by email
    const user = await userRepo.findOneBy({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
