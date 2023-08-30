import express from 'express';
import 'dotenv/config';
import router from './src/routes';

const app = express();

app.use(router);

app.listen(process.env.PORT, () => {
  console.log('Server started');
});
