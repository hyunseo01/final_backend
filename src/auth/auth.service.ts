import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from '../common/enums/user-role.enum';
import { SigninDto } from './dto/Signin.dto';
import { User } from '../users/user/entities/user.entity';
import { UpdatePasswordDto } from './dto/updatePassword.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(dto: SignupDto) {
    const exists = await this.userRepository.findOneBy({ email: dto.email });
    if (exists) throw new ConflictException('이미 가입된 이메일입니다.');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = this.userRepository.create({
      email: dto.email,
      password: hashed,
      name: dto.name,
      role: dto.role as UserRole,
    });

    await this.userRepository.save(user);

    return {
      message: '회원가입이 완료되었습니다.',
      data: null,
    };
  }

  async signin(dto: SigninDto) {
    const user = await this.userRepository.findOneBy({ email: dto.email });
    if (!user) throw new UnauthorizedException('이메일이 존재하지 않습니다.');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch)
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');

    const token = this.jwtService.sign({ sub: user.id, role: user.role });

    return {
      message: '로그인에 성공했습니다.',
      data: {
        accessToken: token,
      },
    };
  }

  async updatePassword(userid: number, dto: UpdatePasswordDto) {
    const user = await this.userRepository.findOneBy({ id: userid });
    if (!user)
      throw new UnauthorizedException('해당 유저가 존재하지 않습니다.');

    const isMatch = await bcrypt.compare(dto.oldPassword, user.password);
    if (!isMatch)
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    if (dto.newPassword != dto.confirmPassword)
      throw new BadRequestException(
        '입력한 비밀번호와 확인 비밀번호가 일치하지 않습니다.',
      );

    const hashed = await bcrypt.hash(dto.newPassword, 10);
    await this.userRepository.update(user.id, { password: hashed });

    return {
      message: '비밀번호 변경이 완료되었습니다.',
      data: null,
    };
  }
}
