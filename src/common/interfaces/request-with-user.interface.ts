import { Request } from 'express';
import { UserRole } from '../enums/user-role.enum';

export interface RequestWithUser extends Request {
  user: {
    userId: number;
    role: UserRole;
  };
}
