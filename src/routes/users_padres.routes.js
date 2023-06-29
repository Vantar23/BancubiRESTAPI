import { Router } from "express";
import {
  createUserPadre,
  deleteUserPadre,
  getUserPadres,
  updateUserPadre,
  getUserPadreById,
  validateUserPadre,
} from "../controllers/users_padres.controllers.js";

const router = Router();

router.get("/users_padres", getUserPadres);
router.get("/users_padres/:id", getUserPadreById);
router.post("/users_padres", createUserPadre);
router.patch("/users_padres/:id", updateUserPadre);
router.delete("/users_padres/:id", deleteUserPadre);
router.post("/users_padres/validate", validateUserPadre);

export default router;
