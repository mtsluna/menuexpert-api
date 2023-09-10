import "reflect-metadata";
import {DataSource} from "typeorm";
import Restaurant from "../../routes/restaurant";

console.log( `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`)

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`,
    synchronize: true,
    logging: true,
    useNewUrlParser: true,
    entities: [Restaurant],
    subscribers: [],
    migrations: [],
})