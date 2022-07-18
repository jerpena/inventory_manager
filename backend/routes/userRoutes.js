import { Router } from "express";
import {
    getAllUsers,
    registerUser,
    updateUser,
    deleteUser,
    loginUser,
} from '../controllers/userController.js';
const router = Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/all', getAllUsers);
router.route('/edit/:id').put(updateUser).delete(deleteUser);

export default router;