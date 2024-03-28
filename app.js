import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import userRoutes from './src/routes/user.js';

const app = express();

const apiURL = '/api/v1';
var db_url = '';

if (process.env.NODE_ENV === 'dev') {
  db_url = process.env.DB_URL_ATLAS;
  app.use(morgan('dev'));
} else {
  db_url = process.env.DB_URL_ATLAS;
  // app.use(morgan('dev'));
}

mongoose
  .connect(`${db_url}`)
  .then(() => {
    console.log(`Connected to database in mode ${process.env.NODE_ENV}`);
  })
  .catch(err => {
    console.log(err);
  });


app.use(express.json());
app.use(`${apiURL}/users`, userRoutes);

export default app;
