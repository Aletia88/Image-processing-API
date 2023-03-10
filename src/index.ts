import express from 'express';
const app = express();
import route from './routes/index.';

const port = 3000;

app.use('/api', route);

app.listen(port, () => {
  console.log('the server is started');
});

export default app;
