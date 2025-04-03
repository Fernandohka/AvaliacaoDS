import mongoose, { Schema, Document } from 'mongoose';

interface IDelivery extends Document {
    id_pedido: string
    id_tranportadora: string
    status: string
}

const DeliverySchema: Schema = new Schema({
    id_pedido: {type: String, required: true},
    id_tranportadora: {type: String, required: true},
    status: {type: String, required: true},
})

const Delivery = mongoose.model<IDelivery>('Delivery', DeliverySchema);

export default Delivery;