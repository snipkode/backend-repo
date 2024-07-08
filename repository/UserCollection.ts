import { db } from '../config/firebaseConfig';

const USERS_COLLECTION = 'USERS';

const updateUserData = async (userId: string, data: any) => {
  await db.collection(USERS_COLLECTION).doc(userId).set(data, { merge: true });
};

const fetchUserData = async (userId: string) => {
  const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
  if (!userDoc.exists) {
    throw new Error('User not found');
  }
  return userDoc.data();
};

export { updateUserData, fetchUserData };
