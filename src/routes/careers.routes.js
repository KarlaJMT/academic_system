import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getAllCareers, createCareer, getCareerById, updatedCareer, deleteCareer } from "../controllers/career.controller.js";

const router = Router();

// router.get('/careers', authRequired, (req, res) => res.send('careers'));

router.get('/careers', authRequired, getAllCareers);
router.post('/careers', authRequired, createCareer);
router.get('/careers/:id', authRequired, getCareerById);
router.put('/careers/:id', authRequired, updatedCareer);
router.delete('/careers/:id', authRequired, deleteCareer);

export default router;