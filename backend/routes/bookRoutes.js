import express from 'express';
import { getAllBooks, getBookById, createBook, searchBook } from '../controllers/bookController.js';
import { authenticate } from '../middleware/Auth.Middleware.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', authenticate, createBook);
router.get('/search', searchBook);

export default router;
