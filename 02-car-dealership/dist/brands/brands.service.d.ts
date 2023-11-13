import { type CreateBrandDto, type UpdateBrandDto } from './dto';
export declare class BrandsService {
    private brands;
    create(createBrandDto: CreateBrandDto): Brand;
    findAll(): Brand[];
    findOne(id: string): any;
    update(id: string, updateBrandDto: UpdateBrandDto): any;
    remove(id: string): {
        message: string;
    };
}
