import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../../users/user/entities/user.entity';
import { ExerciseCategory } from './exercise-category.entity';

@Entity('exercise_records')
export class ExerciseRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  categoryId: number;

  @Column({ nullable: true, type: 'text' })
  content: string;

  @Column({ nullable: true, type: 'text' })
  photoUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => ExerciseCategory, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoryId' })
  category: ExerciseCategory;
}
