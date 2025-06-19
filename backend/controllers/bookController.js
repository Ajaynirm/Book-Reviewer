import {pool} from '../config/db.js';

export const getAllBooks = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Book not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBook = async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO books (title, author, description) VALUES (?, ?, ?)',
      [title, author, description]
    );
    res.status(201).json({ message: 'Book added', bookId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
