import express, { Request, Response, Router } from "express";
import { carrierCadastroDto } from "../dtos/carrierCadastroDto.ts";
import CarrierService from "../services/carrierService.ts";

class carrierController {
    static async CadastroCarrier(req: Request, res: Response) : Promise<void> {
        const data: carrierCadastroDto = req.body;

        try {
            var carrier = await CarrierService.CadastroCarrier(data);
            res.status(200).json({carrier})
        } catch (error) {
            res.status(400).json({ message: 'Erro', error })
        }
    }

    static async GetDeliveries(req: Request, res: Response) : Promise<void> {

    }
}

export default carrierController;