import express from 'express';
import { search } from './controllers/search.controller';
import { errorHandler } from './middlewares/errorHandler.middleware';

const app = express();

app.use(express.json());
app.use(errorHandler);

app.get('/api/execute', search);

export default app;
