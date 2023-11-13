import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  readonly id: string;

  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
