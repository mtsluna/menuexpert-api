import { Router } from 'express';
import { Restaurant } from '../entities/restaurant';

const restaurantRouter = Router();

restaurantRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const restaurant = new Restaurant();
  restaurant.name = 'Mc Donalds';

  res.send({
    test: 'ok3',
  });
});

export default restaurantRouter;
