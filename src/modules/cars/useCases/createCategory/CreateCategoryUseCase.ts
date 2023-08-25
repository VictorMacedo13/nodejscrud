import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name:string; 
    description:string;
}

@injectable()
class CreateCategoryUseCase{
    constructor(
        @inject("CategoriesRepository") 
        private categoriesRepository: ICategoryRepository
        ){}

    async execute({name, description}: IRequest):Promise<void>{

        const nameAlreadyExist = await this.categoriesRepository.findByName(name);

        if (nameAlreadyExist) {
            
            throw new Error("Name already exists");
            
        }

        await this.categoriesRepository.create({ name, description });

    }
}

export {CreateCategoryUseCase}