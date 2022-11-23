import { Request, Response } from "express";
import { Product } from "../../models/Product";


export async function listProducts(request: Request, response: Response) {

  try {
    const products = await Product.find();

    response.json(products);

  } catch (err){

    console.log(err);
    response.sendStatus(500);
  }
 
}
