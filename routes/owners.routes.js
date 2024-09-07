import { Router } from "express";
import {
  DeleteOwnerById,
  GetOwnerById,
  UpdateOwnerById,
  createNewOwner,
  login,
} from "../controllers/owners.controllers.js";
import ValidateDataMiddleware from "../middlewares/validation/ValidateData.middleware.js";
import { body } from "express-validator";
import authorizateOwner from "../Middlewares/owners/authorizateOwner.js";

const ownersRoutes = Router();

// Ruta para obtener un usuario por ID
ownersRoutes.get("/:id", GetOwnerById);

// Ruta para crear un owner
ownersRoutes.post(
  "/",
  [
    body("nameowner", "nameowner not valid").exists().isString(),
    body("password", "password invalid").exists().isString().isLength({
      min: 1,
      max: 10,
    }),
    ValidateDataMiddleware,
  ],
  createNewOwner
);

// Ruta para login
ownersRoutes.post("/login", login);

// Ruta para modificar un usuario por ID
ownersRoutes.patch("/:id", UpdateOwnerById);

// Ruta para eliminar un usuario por ID
ownersRoutes.delete("/:id", authorizateOwner, DeleteOwnerById);

export default ownersRoutes;
