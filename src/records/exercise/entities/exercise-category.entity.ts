import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ExerciseGroup } from './exercise-group.entity';

@Entity('exercise_categories')
export class ExerciseCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ nullable: true })
  groupId: number;

  @ManyToOne(() => ExerciseGroup, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'groupId' })
  group: ExerciseGroup;
}
