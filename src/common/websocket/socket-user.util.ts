import { Socket } from 'socket.io';
import { SocketUserPayload } from '../interfaces/socket-user.interface';

export function getSocketUser(socket: Socket): SocketUserPayload | null {
  const user = (socket.data as { user?: unknown }).user;

  if (
    typeof user === 'object' &&
    user !== null &&
    'userId' in user &&
    'role' in user
  ) {
    const { userId, role } = user as Record<string, unknown>;

    if (typeof userId === 'number' && typeof role === 'string') {
      return { userId, role } as SocketUserPayload;
    }
  }

  return null;
}
