import express from "express";
import productsRouter from "../routes/productsRoutes.js";

const app = express();
app.use(express.json(), productsRouter);

export default app