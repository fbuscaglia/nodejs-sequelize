import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  loginUsuario,
  revalidarToken,
  updateUser,
} from "../controllers/user.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

// Routes
router.post("/register", createUser);
router.post("/login", loginUsuario);
router.get("/renew", validarJWT ,revalidarToken );
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
