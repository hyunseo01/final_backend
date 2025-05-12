import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exercise_groups')
export class ExerciseGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;
}
