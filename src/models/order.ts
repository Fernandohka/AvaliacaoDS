import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
    id_customer: string
    products: string[]
    status: string
}

const OrderSchema: Schema = new Schema({
    id_customer: {type: String, required: true},
    products: {type: Array<String>, required: true},
    status: {type: String, required: true}
})

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;