import { Request, Response } from "express";

import { Product } from "../../models/Product";


export async function deleteProduct(request: Request, response: Response) {

  const { productId } = request.params;

  await Product.findByIdAndDelete(productId);

  response.send(204);

}
