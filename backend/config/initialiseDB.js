// initDB.js
import { pool } from './db.js';

export const initDatabase = async () => {
  try {
    // Create Books table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        author VARCHAR(255),
        description TEXT
      )
    `);

    // Create Reviews table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        book_id INT,
        user_id INT,
        rating INT,
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        password_hash VARCHAR(255)
      )
    `);

    console.log("✅ Tables created successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed to create tables:", err.message);
    process.exit(1);
  }
};

