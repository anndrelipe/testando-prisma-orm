import { response } from "express";
import prismaClient from "../databases/prismaClient.js";

class CreateProductsController {
    static async handle(req, res) {
        const {name, bar_code, price} = req.body;
        const product = await prismaClient.product.create({
            data:{
                bar_code,
                name,
                price
            }
        })

        return res.json(product)
    }
}

export default CreateProductsController