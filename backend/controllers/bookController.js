import {pool} from '../config/db.js';

export const getAllBooks = async (req, res) => {
  try {
    
    const [rows] = await pool.query('SELECT * FROM books');
    return res.json(rows);
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

export const searchBook = async (req, res) => {
  const { search = '', page = 1 } = req.query;
  const limit = 6;
  const offset = (page - 1) * limit;

  try {
    const [books] = await pool.query(
      `SELECT * FROM books WHERE title LIKE ? OR author LIKE ? LIMIT ? OFFSET ?`,
      [`%${search}%`, `%${search}%`, limit, offset]
    );

    const [[{ count }]] = await pool.query(
      `SELECT COUNT(*) as count FROM books WHERE title LIKE ? OR author LIKE ?`,
      [`%${search}%`, `%${search}%`]
    );

    res.json({ books, totalPages: Math.ceil(count / limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}