import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('foodInfo')
export class FoodInfo extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column('timestamptz')
  time: Date;

  @Column()
  food: string;

  @Column()
  place: string;

  @Column()
  numberOfDucks: number;

  @Column()
  foodKind: string;

  @Column()
  quantity: number;
}
