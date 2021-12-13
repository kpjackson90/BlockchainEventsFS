import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from './middlewares';
import { indexStringRouter } from './routes';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(errorHandler);

app.use(indexStringRouter);
app.all('*', async () => {
  throw new NotFoundError();
});

export { app };
