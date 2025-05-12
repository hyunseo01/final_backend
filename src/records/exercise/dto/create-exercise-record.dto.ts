import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateExerciseRecordDto {
  @IsInt()
  @IsNotEmpty({ message: '사용자 ID를 입력해주세요' })
  userId: number;

  @IsInt()
  @IsNotEmpty({ message: '카테고리 ID를 입력해주세요' })
  categoryId: number;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  photoUrl?: string;
}
