import { Request, Response } from "express";
import { Product } from "../../models/Product";


export async function listProductsbyCategories(request: Request, response: Response) {

  try {
    const { categoryId } = request.params;
    const products = await Product.find().where('category').equals(categoryId);

    response.send(products);

  } catch (err){

    console.log(err);
    response.sendStatus(500);
  }
 
}
