import { CustomerCadastroDto } from "../dtos/customerCadastroDto.ts";
import Customer from "../models/customer.ts";


class CustomerService {
    static async CadastroCustomer(data: CustomerCadastroDto) : Promise<any> {
        const {nome, email, telefone, endereco} = data;
        try {
            const customer = new Customer({ nome, email, telefone, endereco });
            await customer.save();
            return customer;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }
}

export default CustomerService;