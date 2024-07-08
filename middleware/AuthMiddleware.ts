import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';
import { auth } from '../config/firebaseConfig';

interface AuthenticatedRequest extends Request {
    currentUser?: Record<string, any>; 
}

const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return next(ApiError.badRequest('Token is required'));
    }
  
    try {
      const decodedToken = await auth().verifyIdToken(token);
  
      // Attach the decoded token to the request object for further use if needed
      req['currentUser'] = decodedToken;
  
      next();
    } catch (error) {
      console.error('Error validating token:', error);
      return next(ApiError.badRequest('Invalid token'));
    }
  };

export default authMiddleware;
