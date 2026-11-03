import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('faculty')
export class Faculty {
  @PrimaryColumn()
  Id: string;

  @Column()
  Name: string;

  @Column()
  expertise: string;

  @Column()
  noOfPublication: number;
}