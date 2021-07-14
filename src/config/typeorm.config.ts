import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'ec2-52-0-67-144.compute-1.amazonaws.com',
  port: 5432,
  username: 'fjktefftaabqvo',
  password: 'fe136c512002002205acfcdb5625e8b1514722f742353f7165a092ca97c603fb',
  database: 'd2pd29ikrak3ch',
  autoLoadEntities: true,
  synchronize: true,
  ssl: { rejectUnauthorized: false },
});
