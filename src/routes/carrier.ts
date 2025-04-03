import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import carrierController from '../controllers/carrierController.ts';

export default router

.post('/', carrierController.CadastroCarrier)
.get('/:id/deliveries', carrierController.GetDeliveries)