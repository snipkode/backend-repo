import express from 'express';
import { testing, updateUser, getUser } from '../controller/api';
import authMiddleware from '../middleware/AuthMiddleware';

const app = express();

app.use(express.json());

app.get('/', testing);
app.post('/update-user-data', updateUser);
app.get('/fetch-user-data/:userId', authMiddleware, getUser);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
