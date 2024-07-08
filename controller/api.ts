import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';
import { fetchUserData, updateUserData } from '../repository/UserCollection';

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId, data } = req.body;

  try {
    await updateUserData(userId, data);
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(error.message));
    } else {
      next(ApiError.internal('An unexpected error occurred'));
    }
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  try {
    const userData = await fetchUserData(userId);
    res.status(200).json(userData);
  } catch (error) {
    if (error instanceof Error) {
      next(ApiError.internal(error.message));
    } else {
      next(ApiError.internal('An unexpected error occurred'));
    }
  }
};

const testing = async(req : Request, res: Response, next: NextFunction) => {
  res.status(200).json({message: "Testing response api!"});
}

export { updateUser, getUser, testing };
