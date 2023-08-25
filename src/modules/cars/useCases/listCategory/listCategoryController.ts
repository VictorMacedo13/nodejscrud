import { Request, Response } from "express";
import { ListCategoryUsecase } from "./listCategoryUseCase";
import { container } from "tsyringe";


class ListCategoryController {


    async handle(request:Request, response:Response): Promise<Response>{
        const listCategoryUseCase = container.resolve(ListCategoryUsecase)
        const list = await listCategoryUseCase.execute();
        return response.json(list);
    }
}

export { ListCategoryController }