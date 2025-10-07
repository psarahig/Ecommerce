import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

router.get('/:id', 
  OrderController.getById
);

router.post('/', 
  OrderController.create
);

export default router;
