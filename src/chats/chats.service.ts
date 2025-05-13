import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Not, Repository } from 'typeorm';
import { ChatRoomResponseDto } from './dto/chat-room-response.dto';
import { Message } from '../messages/entities/message.entity';
import { Profile } from '../users/profile/entities/profile.entity';
import { formatDateForChat } from 'src/common/utils/formatDateForChat';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,

    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,

    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async getChatRooms(userId: number): Promise<ChatRoomResponseDto[]> {
    const rooms = await this.chatRepository.find({
      where: { trainerId: userId },
      relations: ['user'],
      order: { updatedAt: 'DESC' },
    });

    const result: ChatRoomResponseDto[] = [];

    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];
      const target = room.user;

      const profile = await this.profileRepository.findOne({
        where: { userId: target.id },
      });

      const lastMessage = await this.messageRepository.findOne({
        where: { chatId: room.id },
        order: { createdAt: 'DESC' },
      });

      const unreadCount = await this.messageRepository.count({
        where: {
          chatId: room.id,
          senderId: Not(userId),
          isRead: false,
        },
      });

      result.push({
        roomId: room.id,
        targetName: target.name,
        targetProfileImage: profile?.photoUrl || '',
        lastMessage: lastMessage?.content?.slice(0, 20) || '',
        unreadCount,
        lastMessageAt: formatDateForChat(lastMessage?.createdAt || new Date()),
      });
    }

    return result;
  }
}
