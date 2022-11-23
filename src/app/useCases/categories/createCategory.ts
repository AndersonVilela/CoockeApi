import { Request, Response } from "express";
import { Category } from "../../models/Category";


export async function createCategories(request: Request, response: Response) {

  try {
    const { icon, name } = request.body;

    if (!name) {
      return response.status(400).json({
        error: 'Name is required',
      });
    }

    const category = await Category.create({ icon, name });
    response.status(201).json(category);

  } catch (err){
    console.log(err);
    response.sendStatus(500);
  }
 
}
