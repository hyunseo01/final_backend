import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/user/entities/user.entity';
import { Chat } from '../../chats/entities/chat.entity';
import { BaseTimeEntity } from '../../common/utils/baseTime.entity';

@Entity('messages')
export class Message extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  chatId: number;

  @Column({ nullable: true })
  senderId: number;

  @Column({ nullable: true, type: 'text' })
  content: string;

  @Column({ default: false })
  isRead: boolean;

  @ManyToOne(() => Chat, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'chatId' })
  chat: Chat;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'senderId' })
  sender: User;
}
