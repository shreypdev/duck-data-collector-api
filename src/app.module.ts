import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { FoodInfoModule } from './modules/foodInfo/foodInfo.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig()), FoodInfoModule],
})
export class AppModule {}
