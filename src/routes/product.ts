import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import productController from '../controllers/productController.ts';

export default router

.post('/', productController.CadastroProduct)
.get('/', productController.GetProducts)
.delete('/:id', productController.DeleteProduct)