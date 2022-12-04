import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.get('/', async (req, res) => {
  res.send('OK. Backend is working!');
});

import { config } from "dotenv";
config({ path: process.ENV })

const port = process.env.PORT;

mongoose.connect(
  process.env.DATABASE_URL,
  (error) => {
    if (error) {
      console.log('Fails connection to database', error);
    } else {
      console.log('Connected to database');
      app.listen(port, () => {
        console.log(`Server ready on port ${port}`);
      });
    }
  },
);

