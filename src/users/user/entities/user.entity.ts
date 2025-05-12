import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../../../common/enums/user-role.enum';
import {
  IsNotEmpty,
  IsString,
  Length,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsIn,
} from 'class-validator';
import { BaseTimeEntity } from '../../../common/utils/baseTime.entity';

@Entity('users')
export class User extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsOptional()
  @IsEmail()
  @Length(0, 255)
  email?: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  password: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['user', 'trainer'])
  role: UserRole;

  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;
}
