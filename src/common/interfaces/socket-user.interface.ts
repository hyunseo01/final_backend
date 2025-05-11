import { UserRole } from '../enums/user-role.enum';

export interface SocketUserPayload {
  userId: number;
  role: UserRole;
}
