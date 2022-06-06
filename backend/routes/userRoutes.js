import { Router } from "express";

const router = Router();

router.route('/').get(getUser).post(addUser);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;