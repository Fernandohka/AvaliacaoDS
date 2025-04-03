import { carrierCadastroDto } from "../dtos/carrierCadastroDto.ts";
import Carrier from "../models/carrier.ts";


class CarrierService {
    static async CadastroCarrier(data: carrierCadastroDto) : Promise<any> {
        const {nome, CNPJ, tipo_transporte} = data;
        try {
            const carrier = new Carrier({ nome, CNPJ, tipo_transporte });
            await carrier.save();
            return carrier;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }
}

export default CarrierService;