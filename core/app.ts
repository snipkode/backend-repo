import express from 'express';
import { testing, updateUser, getUser } from '../controller/api';
import authMiddleware from '../middleware/authMiddleware';

const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

app.get('/', testing);
app.post('/update-user-data', authMiddleware, updateUser);
app.get('/fetch-user-data/:userId', authMiddleware, getUser);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
