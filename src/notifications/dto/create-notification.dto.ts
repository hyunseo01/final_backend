import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export enum NotificationType {
  RESERVATION = 'reservation',
  CHAT = 'chat',
  RECORD = 'record',
}

export class CreateNotificationDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsEnum(NotificationType)
  @IsNotEmpty()
  type: NotificationType;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsBoolean()
  @IsOptional()
  isRead?: boolean;
}
