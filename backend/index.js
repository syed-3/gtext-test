import express from 'express';
import mongoose from 'mongoose';
import UserRoute from './routes/UserRoute.js';
import cors from 'cors';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/some_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server up and running...'));
