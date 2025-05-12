import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('meal_types')
export class MealType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  label: string;
}
