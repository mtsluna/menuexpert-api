// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';
import { DataSource } from 'typeorm';

console.log(`Connecting to ${process.env.MONGO_PROTOCOL}://**********:**********@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`);

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
  synchronize: true,
  logging: true,
  useNewUrlParser: true,
  entities: ['src/entities/*.ts'],
  subscribers: [],
  migrations: [],
});
