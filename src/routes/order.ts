import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import orderController from '../controllers/orderController.ts';

export default router

.post('/', orderController.CadastroOrder)
// .get('/', orderController.GetOrders)
.put('/:id/cancel', orderController.CancelOrder)