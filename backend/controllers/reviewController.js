import {pool} from '../config/db.js';

export const getReviews = async (req, res) => {
  const { bookId } = req.query;
  try {
    const [rows] = await pool.query('SELECT * FROM reviews WHERE book_id = ?', [bookId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addReview = async (req, res) => {
  const { bookId, userId, rating, comment } = req.body;
  try {
    await pool.query(
      'INSERT INTO reviews (book_id, user_id, rating, comment) VALUES (?, ?, ?, ?)',
      [bookId, userId, rating, comment]
    );
    res.status(201).json({ message: 'Review added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
