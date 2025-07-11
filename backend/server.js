import express from "express";

import cors from "cors";
import bookRoutes from './routes/bookRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {pool} from "./config/db.js";
import { configDotenv } from "dotenv";
import { authenticate } from "./middleware/Auth.Middleware.js";

configDotenv();

const app=express();
const port=process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);


app.get("/", authenticate,(req, res) => {
    res.status(200).json({
      message: "📚 This is the root API",
      from: req.ip,
      message: "Hello, " + req.user.uid 
    });
  });
  



  const startServer = async () => {
    try {
      await pool.query('SELECT 1');  // ✅ Ensure DB connection
      console.log('✅ MySQL DB connected');
  
      app.listen(port, '0.0.0.0', () => {
        console.log(`🚀 Server running at http://localhost:${port}`);
      });
    } catch (err) {
      console.error('❌ Startup failed:', err.message);
      process.exit(1);
    }
  };
  
  startServer();
  


