import express from 'express';
import { search } from './controllers/restaurant.controller';
import { errorHandler } from './middlewares/errorHandler.middleware';

// import fsqDevelopersPlaces from '@api/fsq-developers-places';

const app = express();

app.use(express.json());

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/restaurants', search);

app.use(errorHandler);

export default app;
