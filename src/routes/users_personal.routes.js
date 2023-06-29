import { Router } from "express";
import {
  createUserPersonal,
  deleteUserPersonal,
  getUserPersonal,
  updateUserPersonal,
  getUserPersonalById,
  validateUserPersonal,
} from "../controllers/users_personal.controllers.js";

const router = Router();

router.get("/users_personal", getUserPersonal);
router.get("/users_personal/:id", getUserPersonalById);
router.post("/users_personal", createUserPersonal);
router.patch("/users_personal/:id", updateUserPersonal);
router.delete("/users_personal/:id", deleteUserPersonal);
router.post("/users_personal/validate", validateUserPersonal);

export default router;
