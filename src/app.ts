import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN || '*',
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(helmet());

export { app };
