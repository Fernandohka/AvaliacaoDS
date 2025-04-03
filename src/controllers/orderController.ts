import express, { Request, Response, Router } from "express";
import { OrderCadastroDto } from "../dtos/orderCadastroDto.ts";
import OrderService from "../services/orderService.ts";

class OrderController {
    static async CadastroOrder(req: Request, res: Response) : Promise<void> {
        const data: OrderCadastroDto = req.body;

        try {
            var order = await OrderService.CadastroOrder(data);
            res.status(200).json({order})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async GetOrders(req: Request, res: Response, status: string) {

        try {
            var orders = await OrderService.GetOrders({status});
            res.status(200).json({orders})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async CancelOrder(req: Request, res: Response) {
        const {id} = req.params;
        try {
            var order = await OrderService.CancelOrder({id})
            res.status(200).json({order})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }
}

export default OrderController;