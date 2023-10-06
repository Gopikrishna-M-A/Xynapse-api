import express from 'express';
import { createIntern, getInternById, getAllInterns, deleteIntern, updateIntern }  from '../controllers/intern.js';
const router = express.Router();

router.post("/", createIntern)
router.get("/", getAllInterns)
router.get("/:adminId", getInternById)
router.patch("/:adminId", updateIntern)
router.delete("/:adminId", deleteIntern)

export default router;
