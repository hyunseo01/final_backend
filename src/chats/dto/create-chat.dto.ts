import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateChatDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  trainerId: number;
}
