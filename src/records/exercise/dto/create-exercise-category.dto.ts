import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateExerciseCategoryDto {
  @IsString()
  @IsNotEmpty({ message: '카테고리 이름을 입력해주세요' })
  @Length(1, 50)
  name: string;

  @IsInt()
  @IsOptional()
  groupId?: number;
}
