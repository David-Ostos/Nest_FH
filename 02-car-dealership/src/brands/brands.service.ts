import { Injectable, NotFoundException } from '@nestjs/common';
import { type CreateBrandDto, type UpdateBrandDto } from './dto';
import { type Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    /*     {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    } */
  ];

  create ( createBrandDto: CreateBrandDto ) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push( brand );

    return brand;
  }

  findAll ( ) {
    return this.brands;
  }

  findOne ( id: string ) {

    const brand = this.brands.find( brand => brand.id === id );
    if ( !brand ) throw new NotFoundException(`Brand with id ${ id } not found`);

    return brand;
  }

  update ( id: string, updateBrandDto: UpdateBrandDto ) {

    let brandDB = this.findOne( id );

    this.brands = this.brands.map( brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          id
        };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove ( id: string ) {

    this.brands = this.brands.filter(brand => brand.id !== id);

    return { message: `this brand with id: ${ id } has been removed` };
  }
}
