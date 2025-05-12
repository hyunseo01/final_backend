import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  @IsOptional()
  userId: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(120)
  age: number;

  @IsString()
  @IsOptional()
  gender: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(300)
  height: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(500)
  weight: number;

  @IsString()
  @IsOptional()
  intro: string;

  @IsString()
  @IsOptional()
  photoUrl?: string;
}
