import { Body, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/user-role.enum';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ApiOkResponse } from '@nestjs/swagger';
import { ChatRoomResponseDto } from './dto/chat-room-response.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatService: ChatsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.TRAINER)
  @ApiOkResponse({ type: ChatRoomResponseDto, isArray: true })
  @Get('/rooms')
  getChatLists(
    @CurrentUser() user: { userId: number },
  ): Promise<ChatRoomResponseDto[]> {
    return this.chatService.getChatRooms(user.userId);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(UserRole.USER, UserRole.TRAINER)
  // @Get('/messages')
  // getMessages(
  //   @CurrentUser() user: { userId: number; role: UserRole },
  //   @Query() dto: GetMessagesDto,
  // ) {
  //   return this.chatService.getMessages(user.userId, dto);
  // }
}
