import express, { Request, Response, Router } from "express";
import { DeliveryCadastroDto } from "../dtos/deliveryCadastroDto.ts";
import DeliveryService from "../services/deliveryService.ts";

class DeliveryController {
    static async CadastroDelivery(req: Request, res: Response) : Promise<void> {
        const data: DeliveryCadastroDto = req.body;

        try {
            var delivery = await DeliveryService.CadastroDelivery(data);
            res.status(200).json({delivery})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async GetDeliveries(req: Request, res: Response) : Promise<void> {
        const {id} = req.params;
        var deliveries = await DeliveryService.GetDeliveries({id});
        res.status(200).json({deliveries})

    }
}

export default DeliveryController;