import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  let isValidToken = false;

  if (!token) {
    next(ApiError.badRequest('Token is required'));
  } else {
    if (isValidToken) {
      next();
    } else {
      next(ApiError.badRequest('Invalid token'));
    }
    next();
  }
};

export default authMiddleware;
