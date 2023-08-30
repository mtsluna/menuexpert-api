import { Router } from 'express';

const restaurantRouter = Router();

restaurantRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  res.send({
    test: 'ok3',
  });
});

export default restaurantRouter;
