import { EntityRepository, Repository } from 'typeorm';
import { FoodInfoDto } from './foodInfo.dto';
import { FoodInfo } from './foodInfo.entity';
import { v4 as uuid } from 'uuid';

@EntityRepository(FoodInfo)
export class FoodInfoRepository extends Repository<FoodInfo> {
  async createFoodInfo(params: FoodInfoDto) {
    const foodInfo = new FoodInfo();
    foodInfo.id = uuid();
    foodInfo.time = params.time;
    foodInfo.food = params.food;
    foodInfo.place = params.place;
    foodInfo.numberOfDucks = params.numberOfDucks;
    foodInfo.foodKind = params.foodKind;
    foodInfo.quantity = params.quantity;

    try {
      return foodInfo.save();
    } catch (error) {
      console.log(error);
    }
  }
}
