import { Request, Response } from "express";
import { Category } from "../../models/Category";


export async function deleteCategories(request: Request, response: Response) {

  const { categorieID } = request.params;

  await Category.findByIdAndDelete(categorieID);

  response.send(204);

}
