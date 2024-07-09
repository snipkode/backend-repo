import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';
import { fetchUserData, updateUserData } from '../repository/UserCollection';
import { auth } from '../config/firebaseConfig';

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { userId, data } = req.body;
  console.log("request body update user!",req.body);

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

// const login = async (req: Request, res: Response, next: NextFunction) => {
//   const { email, password } = req.body;

//   try {
//     const userRecord = await auth().getUserByEmail(email);

//     // User exists, authenticate with email and password
//     await auth().signInWithEmailAndPassword(email, password);

//     // Retrieve user ID token for client authentication
//     const user = await auth().getUser(userRecord.uid);
//     const token = await user.getIdToken();

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     next(ApiError.internal('Error logging in'));
//   }
// };

const testing = async(req : Request, res: Response, next: NextFunction) => {
  res.status(200).json({message: "Testing response api!"});
}

export { updateUser, getUser, testing };
