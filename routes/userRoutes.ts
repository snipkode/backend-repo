import express from 'express';
import { updateUser, getUser, testing } from '../controller/api';
import authMiddleware from '../middleware/AuthMiddleware';

const router = express.Router();

router.get('/', testing);
router.post('/update-user-data', authMiddleware, updateUser);
router.get('/fetch-user-data/:userId', authMiddleware, getUser);

export default router;
