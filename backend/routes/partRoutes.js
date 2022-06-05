import { Router } from "express";
import { getParts, addPart, updatePart, deletePart } from "../controllers/partController.js";
const router = Router();

router.route('/').get(getParts).post(addPart);
router.route('/:id').put(updatePart).delete(deletePart);

export default router;