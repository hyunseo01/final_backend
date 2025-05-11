import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [UserModule, ProfileModule],
  controllers: [UserController, ProfileController],
  providers: [UserService, ProfileService]
})
export class UsersModule {}
