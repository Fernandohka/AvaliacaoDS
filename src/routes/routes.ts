import { Express } from 'express';
import express from 'express'
import customer from './customer.ts';
import carrier from './carrier.ts';
import order from './order.ts';
import product from './product.ts';

export default function (app: Express) {
app
    .use(express.json())
    .use('/carrier', carrier)
    .use('/customers', customer)
    .use('/orders', order)
    .use('/products', product)
}