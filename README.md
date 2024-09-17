# loanCreditSeaAss
# Loan Management System

A full-stack application for managing loan applications. This project consists of a backend built with Node.js and TypeScript, and a frontend developed with React and TypeScript.

## Backend

### Description

The backend is built with Node.js and TypeScript using the Express framework. It handles user authentication, loan applications, and loan verification. It uses SQLite as the database and TypeORM for ORM functionality.

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   npm install
The backend server will run on http://localhost:3000.
# API Endpoints

This document describes the API endpoints for the Loan Management System.

## Authentication

### Register

- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**

  ```json
  {
    "username": "string",
    "password": "string",
    "role": "user" // Can be "user", "verifier", or "admin"
  }

