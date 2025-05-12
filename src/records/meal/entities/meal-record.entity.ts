import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../../users/user/entities/user.entity';
import { MealType } from './meal-type.entity';
import { BaseTimeEntity } from '../../../common/utils/baseTime.entity';

@Entity('meal_records')
export class MealRecord extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  mealTypeId: number;

  @Column({ nullable: true, type: 'text' })
  content: string;

  @Column({ nullable: true, type: 'text' })
  photoUrl: string;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => MealType, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'mealTypeId' })
  mealType: MealType;
}
