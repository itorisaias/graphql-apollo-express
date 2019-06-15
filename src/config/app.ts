import express from 'express';
import cors from 'cors';
import compression from 'compression';

const app = express();

app.use('*', cors());
app.use(compression());

export default app;
