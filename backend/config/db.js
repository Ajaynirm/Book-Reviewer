import mysql from 'mysql2/promise';
import { initDatabase } from './initialiseDB.js';

const pool = mysql.createPool({
  host: 'mysql-26391384-book-reviewer.e.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_VBEtTYSqKjffWdJ6g_u',
  database: 'defaultdb',
  port: 25206,
  waitForConnections: true,
  connectionLimit: 10,
});


  
  export { pool };
/*
CREATE TABLE IF NOT EXIST books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT
);

CREATE TABLEIF NOT EXIST reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT,
  user_id INT,
  rating INT,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXIST users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password_hash VARCHAR(255)
);

*/

