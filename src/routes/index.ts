import { Router } from 'express';
import { restaurantRouter } from './restaurant';

export const router = Router();

router.use('/restaurants', restaurantRouter)