import { Request, Response, NextFunction } from 'express';

export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
}
