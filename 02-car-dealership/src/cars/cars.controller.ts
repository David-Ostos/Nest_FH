import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Delete,
  ParseUUIDPipe
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
//  @UsePipes(ValidationPipe)
export class CarsController {
  constructor (private readonly carsService: CarsService) {}

  @Get()
  getAllCars () {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarsById (@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar (@Body() createCarDto: CreateCarDto) {
    const newCar = this.carsService.create(createCarDto);
    return { newCar };
  }

  @Patch(':id')
  updateCar (
  @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto
  ) {
    const updateCar = this.carsService.update(id, updateCarDto);
    return { updateCar };
  }

  @Delete(':id')
  deleteCar (@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
