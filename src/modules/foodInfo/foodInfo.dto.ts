import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FoodInfoDto {
  @IsNotEmpty()
  @ApiProperty()
  time: Date;

  @IsNotEmpty()
  @ApiProperty()
  food: string;

  @IsNotEmpty()
  @ApiProperty()
  place: string;

  @IsNotEmpty()
  @ApiProperty()
  numberOfDucks: number;

  @IsNotEmpty()
  @ApiProperty()
  foodKind: string;

  @IsNotEmpty()
  @ApiProperty()
  quantity: number;
}
