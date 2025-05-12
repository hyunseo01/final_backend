import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/user/entities/user.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
import { BaseTimeEntity } from '../../common/utils/baseTime.entity';

@Entity('reservations')
export class Reservation extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  scheduleId: number;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Schedule, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Schedule;
}
