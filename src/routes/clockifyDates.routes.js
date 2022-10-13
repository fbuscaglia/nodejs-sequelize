import { Router } from "express";
import { getDateByClients, getDateByProject } from "../controllers/clockifyDate.controller.js";

const router = Router();

// Routes
router.get("/:clientId/:dateFrom/:dateTo", getDateByClients);
router.get("/:projectId/:dateFrom/:dateTo", getDateByProject);

export default router;
