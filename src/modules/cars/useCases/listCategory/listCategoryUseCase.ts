import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoryUsecase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoryRepository) {
    }

    async execute(): Promise<Category[]>{
        const result = await this.categoryRepository.list();
        
        
        return result;
    }
}

export{ListCategoryUsecase}