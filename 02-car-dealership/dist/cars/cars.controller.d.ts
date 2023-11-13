import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): any;
    getCarsById(id: string): any;
    createCar(createCarDto: CreateCarDto): {
        newCar: any;
    };
    updateCar(id: string, updateCarDto: UpdateCarDto): {
        updateCar: any;
    };
    deleteCar(id: string): any;
}
