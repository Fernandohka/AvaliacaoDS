import { OrderCadastroDto } from "../dtos/orderCadastroDto.ts";
import { OrderCancelDto } from "../dtos/orderCancelDto.ts";
import { OrderGetDto } from "../dtos/orderGetDto.ts";
import Order from "../models/order.ts";
import Product from "../models/product.ts";


class OrderService {
    static async CadastroOrder(data: OrderCadastroDto) : Promise<any> {
        const {id_customer, products, status} = data;
        try {
            for (let i = 0; i < products.length; i++) {
                const p = await Product.findById(products[i]);
                if(p?.estoque == 0){
                    products.splice(i, 1);
                    i--;
                }
            }
            const order = new Order({ id_customer, products, status });
            await order.save();
            return order;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }

    static async GetOrders(data: OrderGetDto) {
        const {status} = data;

        try {
            const orders = Order.find(
                {
                    where: {status: status}
                }
            )
            return orders;
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }

    static async CancelOrder(data: OrderCancelDto) {
        const {id} = data;

        try {
            const order = await Order.findById(id)
            if (order?.status == "pendente") {
                order.status = "cancelado"
            }
            return order;
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }
}

export default OrderService;