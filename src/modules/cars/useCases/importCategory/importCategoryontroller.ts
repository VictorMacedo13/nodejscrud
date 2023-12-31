import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";
import { container } from "tsyringe";


class ImportCategoryController {
   

    async handle(request:Request, response:Response){
        const {file} = request
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
        await importCategoryUseCase.execute(file)
        response.send()
    }
}

export{ImportCategoryController}