import {ObjectIdColumn, ObjectId, Column, Entity, BaseEntity} from "typeorm";

@Entity({
    database: 'menu-expert'
})
export class Restaurant extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectId

    @Column()
    name: string;

}