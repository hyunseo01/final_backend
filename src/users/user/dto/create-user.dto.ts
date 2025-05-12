import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { UserRole } from 'src/common/enums/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: '이메일을 입력해주세요' })
  @IsEmail()
  @Length(0, 255)
  email: string;

  @IsNotEmpty({ message: '비밀번호를 8자 이상 20자 이하 입력해주세요' })
  @IsString()
  @Length(8, 20)
  password: string;

  @IsNotEmpty({ message: '이름을 2자 이상 10자 이하 입력해주세요' })
  @IsString()
  @Length(2, 10)
  name: string;

  @IsNotEmpty({ message: '권한을 선택해주세요' })
  @IsString()
  @IsIn(['user', 'trainer'])
  role: 'user' | 'trainer';

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;
}
