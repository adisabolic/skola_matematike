// Imports
import dotenv from 'dotenv';

// Load .env
dotenv.config();

// Environment
export const { NODE_ENV } = process.env;

// Port
export const { PORT } = process.env;

// Database connection parameters
export const { DB_USER, DB_PASSWORD, DB_CONNECT_STRING } = process.env;
