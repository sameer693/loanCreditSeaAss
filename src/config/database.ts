import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Loan } from "../entities/Loan";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db/loan_manager.db",
  synchronize: true,  // Automatically syncs schema
  entities: [User,Loan],   // Add all entities (models) here
  logging: true
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => console.log("Error connecting to database: ", error));
