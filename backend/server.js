import 'dotenv/config';
const { PORT = 8000 } = process.env;
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));