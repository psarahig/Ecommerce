import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

router.get('/',
  ProductController.getAll
);

router.get('/:id', 
  ProductController.getById
);

router.put('/:id', 
  ProductController.update
);

router.post('/', 
  ProductController.create
);

router.delete('/:id', 
  ProductController.delete
);

export default router;
