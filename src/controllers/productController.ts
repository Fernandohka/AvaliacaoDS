import express, { Request, Response, Router } from "express";
import { ProductCadastroDto } from "../dtos/productCadastroDto.ts";
import ProductService from "../services/productService.ts";

class ProductController {
    static async CadastroProduct(req: Request, res: Response) : Promise<void> {
        const data: ProductCadastroDto = req.body;

        try {
            var product = await ProductService.CadastroProduct(data);
            res.status(200).json({product})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async GetProducts(req: Request, res: Response) : Promise<void> {
        try {
            var products = await ProductService.GetProducts();
            res.status(200).json({products})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }
    
    static async DeleteProduct(req: Request, res: Response) : Promise<void> {
        
    }
}

export default ProductController;