import mongoose, { Schema, Document } from 'mongoose';

interface ICarrier extends Document {
    nome: string
    CNPJ: string
    tipo_transporte: string
}

const carrierSchema: Schema = new Schema({
    nome: {type: String, required: true},
    CNPJ: {type: String, required: true},
    tipo_transporte: {type: String, required: true},
})

const Carrier = mongoose.model<ICarrier>('Carrier', carrierSchema);

export default Carrier;