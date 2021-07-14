import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodInfoController } from './foodInfo.controller';
import { FoodInfoRepository } from './foodInfo.repository';
import { FoodInfoService } from './foodInfo.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodInfoRepository])],
  controllers: [FoodInfoController],
  providers: [FoodInfoService],
})
export class FoodInfoModule {}
