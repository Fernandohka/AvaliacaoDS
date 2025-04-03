import { ProductCadastroDto } from "../dtos/productCadastroDto.ts";
import Product from "../models/product.ts";


class ProductService {
    static async CadastroProduct(data: ProductCadastroDto) : Promise<any> {
        const {nome, preco, estoque} = data;
        try {
            const product = new Product({ nome, preco, estoque });
            await product.save();
            return product;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }

    static async GetProducts() {
        const products = await Product.find();
        return products;
    }
}

export default ProductService;