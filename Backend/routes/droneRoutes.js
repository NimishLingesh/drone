import express from "express";
import { addDrone, getDronesByOwner, getDronesByType } from "../controllers/droneController.js";

const router = express.Router();

router.post('/add', addDrone);
router.get('/getDronesByType', getDronesByType);
router.get('/getDronesByOwner', getDronesByOwner);

export default router;