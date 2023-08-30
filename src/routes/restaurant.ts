import { Router } from "express";

export const restaurantRouter = Router();

restaurantRouter.get('/{id}', (req, res) => {
    res.send({
        test: 'ok'
    });
});