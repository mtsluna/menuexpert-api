import express from 'express';
import 'dotenv/config';
import router from './src/routes';
import {AppDataSource} from "./src/configurations/typeorm/data-source";
import {Restaurant} from "./src/entities/restaurant";

const app = express();

app.use(router);

app.listen(process.env.PORT, async () => {
  console.log('Server started');

  AppDataSource.initialize().then(async () => {
    const restaurant = new Restaurant();
    restaurant.name = "Mc Donalds";

    Restaurant.getRepository().save(restaurant);
  });
});
