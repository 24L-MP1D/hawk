// src/index.ts
import express from 'express';
import { connect } from './config/mongodb';
import { userRouter } from './router/UserRouter';

const app = express();
const port = 4500;

connect()

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


