import express, { Request, Response, Router } from "express";
import { CustomerCadastroDto } from "../dtos/customerCadastroDto.ts";
import CustomerService from "../services/customerService.ts";

class customerController {
    static async CadastroCustomer(req: Request, res: Response) : Promise<void> {
        const data: CustomerCadastroDto = req.body;

        try {
            var customer = await CustomerService.CadastroCustomer(data);
            res.status(200).json({customer})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async GetOrders(req: Request, res: Response) : Promise<void> {

    }
    
    static async DeleteCustomer(req: Request, res: Response) : Promise<void> {
        
    }
}

export default customerController;