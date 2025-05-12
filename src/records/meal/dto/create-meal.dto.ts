import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateMealTypeDto {
  @IsString()
  @IsNotEmpty({ message: '식단을 입력해주세요' })
  @Length(1, 50)
  label: string;
}
