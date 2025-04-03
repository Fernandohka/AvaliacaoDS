import { DeliveryCadastroDto } from "../dtos/deliveryCadastroDto.ts";
import { DeliveryGetDto } from "../dtos/deliveryGetDto.ts";
import Delivery from "../models/delivery.ts";


class DeliveryService {
    static async CadastroDelivery(data: DeliveryCadastroDto) : Promise<any> {
        const {id_pedido, id_transportadora, status} = data;
        try {
            const delivery = new Delivery({ id_pedido, id_transportadora, status });
            await delivery.save();
            return delivery;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }

    static async GetDeliveries(data: DeliveryGetDto) {
        const {id} = data

        try {
            const delivery = await Delivery.findById(id)
            return delivery;
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }

    static async UpdateDelivery(){
        
    }
}

export default DeliveryService;