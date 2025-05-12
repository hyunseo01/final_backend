import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  @IsNotEmpty({ message: '트레이너 ID를 입력해주세요' })
  trainerId: number;

  @IsDate()
  @IsNotEmpty({ message: '날짜를 입력해주세요' })
  date: Date;

  @IsString()
  @IsNotEmpty({ message: '시작 시간을 입력해주세요' })
  startTime: string;
}
