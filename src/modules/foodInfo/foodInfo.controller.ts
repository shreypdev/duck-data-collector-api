import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { FoodInfoDto } from './foodInfo.dto';
import { FoodInfo } from './foodInfo.entity';
import { FoodInfoService } from './foodInfo.service';

@ApiTags('foodInfo')
@Controller('foodInfo')
@ApiBearerAuth()
export class FoodInfoController {
  constructor(private foodInfoService: FoodInfoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: FoodInfoDto })
  createFoodInfo(@Body() foodInfoDto: FoodInfoDto) {
    console.log(foodInfoDto);
    return this.foodInfoService.createFoodInfo(foodInfoDto);
  }
}
