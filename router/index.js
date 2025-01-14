import express from 'express';
import authRouter from './auth.router.js';
import indexRouter from './index.router.js';

const appRouter = express.Router();

appRouter.get('/', (_req, res) => {
  res.send('Hello World!');
});

appRouter.use('/', indexRouter);
appRouter.use('/auth', authRouter);

export default appRouter;
