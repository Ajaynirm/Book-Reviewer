import express from 'express';
import { getAllBooks, getBookById, createBook, searchBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.get('/search', searchBook);

export default router;
