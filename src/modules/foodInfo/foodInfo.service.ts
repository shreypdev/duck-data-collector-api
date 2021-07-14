import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodInfoDto } from './foodInfo.dto';
import { FoodInfoRepository } from './foodInfo.repository';

@Injectable()
export class FoodInfoService {
  constructor(
    @InjectRepository(FoodInfoRepository)
    private foodInfoRepository: FoodInfoRepository,
  ) {}

  async createFoodInfo(info: FoodInfoDto) {
    return this.foodInfoRepository.createFoodInfo(info);
  }
}
