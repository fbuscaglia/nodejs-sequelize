import { Router } from "express";
import { getProject, getProjects } from "../controllers/clockifyProject.controller.js";


const router = Router();

// Routes
router.get("/", getProjects);
router.get("/:id", getProject);

export default router;