import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import colors from 'colors';

config();

const app = express();

app.listen(2000, (err) => {
  console.log('server is listening on port 3000...'.blue);
});
