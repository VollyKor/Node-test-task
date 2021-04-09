import './helpers/logger';
import './db/db';
import './sequelizeDbs/googleSQL';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from '../src/db/db';
import CashierRouter from './router/cashier';

dotenv.config();
const PORT = process.env.PORT || 3010;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

app.use('/cashier', CashierRouter);
app.get('/', (_, response) => {
  response.send('Hello world!');
});

(function methodName() {
  db.run('INSERT INTO ');
});

export default app;
