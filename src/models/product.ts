import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    nome: string
    preco: number
    estoque: number
}

const ProductSchema: Schema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    estoque: {type: Number, required: true}
})

const Product = mongoose.model<IProduct>('Customer', ProductSchema);

export default Product;