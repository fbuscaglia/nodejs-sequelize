import { config } from "dotenv";
config();

export const SECRET_JWT_SEED =
  process.env.SECRET_JWT_SEED ||
  "Esto-Es-Una-Palbr@-Secretaqwejsad@asdljasdknapito";
export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_DATABASE = process.env.DB_DATABASE || "base_nueva";
export const DB_PORT = process.env.DB_PORT || 3306;