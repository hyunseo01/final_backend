import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/user/entities/user.entity';
import { Chat } from '../../chats/entities/chat.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  chatId: number;

  @Column({ nullable: true })
  senderId: number;

  @Column({ nullable: true, type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Chat, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'chatId' })
  chat: Chat;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'senderId' })
  sender: User;
}
