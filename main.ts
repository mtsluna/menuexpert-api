import express from 'express';
import 'dotenv/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import router from './src/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, async () => {
  console.log('Server started');

  // await AppDataSource.initialize();

  // const restaurant = new Restaurant();
  // restaurant.name = 'Mc Donalds';
  //
  // await Restaurant.getRepository().save(restaurant);
});
