import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Message } from '../messages/entities/message.entity';
import { Profile } from '../users/profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Message, Profile])],
  providers: [ChatsGateway, ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
