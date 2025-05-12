import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  scheduleId: number;
}
