import { Request } from 'express';

export const extractJwtFromHeader = (): ((req: Request) => string | null) => {
  return (req: Request) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return null;
    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' && token ? token : null;
  };
};
