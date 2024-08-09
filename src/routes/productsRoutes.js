import { Router } from "express";
import CreateProductsController from "../controllers/CreateProductsController.js";

const productsRouter = Router();

productsRouter.post('/products', CreateProductsController.handle);
export default productsRouter