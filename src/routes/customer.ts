import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import { validateRegister } from '../middlewares/authMiddleware.ts';
import customerController from '../controllers/customerController.ts';

export default router

.post('/', validateRegister, customerController.CadastroCustomer)
.get('/:id/orders', customerController.GetOrders)
.delete('/:id', customerController.DeleteCustomer)