import { type Car } from 'src/cars/entities/cars.entity';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic'
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang'
  },
  {
    id: uuid(),
    brand: 'Lamborghini',
    model: 'Aventador'
  }
];
