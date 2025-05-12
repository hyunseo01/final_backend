import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateExerciseGroupDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  name: string;
}
