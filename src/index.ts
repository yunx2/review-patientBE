import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';

const app = express();
app.use(cors());
app.use('/api/diagnoses', diagnosesRouter);

const PORT = 3000;
app.get('/ping', (_req, res) => {
  res.send('pong');
});


app.listen(PORT, () => {
  console.log(`server connected at port ${PORT}`);
});
