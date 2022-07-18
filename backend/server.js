import 'dotenv/config';
const { PORT = 8000 } = process.env;
import express from 'express';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import partRoutes from './routes/partRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Connect to DB before express init
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/parts', partRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));