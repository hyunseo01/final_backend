import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
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

@Entity('users')
export class User {
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['user', 'trainer'])
  role: 'user' | 'trainer';

  @IsOptional()
  @IsEmail()
  @Length(0, 255)
  email?: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @IsOptional()
  @IsBoolean()
  is_deleted?: boolean;
}
