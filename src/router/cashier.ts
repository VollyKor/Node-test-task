import express from 'express';
import Cashiers from '../controllers/cashier';

const router = express.Router();

router.get('/', Cashiers.getAll);
router.post('/', Cashiers.add);

router
  .get('/:id', Cashiers.getById)
  .patch('/:id', Cashiers.update)
  .delete('/:id', Cashiers.remove);

router.get('/cashier1', Cashiers.getCashier1);
router.get('/cashier2', Cashiers.getcashier2);

export default router;
