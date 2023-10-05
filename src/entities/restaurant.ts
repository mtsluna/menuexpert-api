import {
  BaseEntity, Column, Entity, ObjectId, ObjectIdColumn,
} from 'typeorm';

@Entity({
  database: 'menu-expert',
})
export class Restaurant extends BaseEntity {
  @ObjectIdColumn()
    id: ObjectId;

  @Column()
    name: string;
}
