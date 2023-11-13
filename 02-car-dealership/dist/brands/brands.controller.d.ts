import { BrandsService } from './brands.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateBrandDto: UpdateBrandDto): any;
    remove(id: string): any;
}
