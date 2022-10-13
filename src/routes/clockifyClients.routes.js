import { Router } from "express";
import {
  getClients,
  getClient,
} from "../controllers/clockifyClient.controller.js";

const router = Router();

// Routes
router.get("/", getClients);
router.get("/:id", getClient);

export default router;
