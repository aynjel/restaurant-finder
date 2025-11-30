import express from 'express';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use(errorHandler);

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

export default app;
