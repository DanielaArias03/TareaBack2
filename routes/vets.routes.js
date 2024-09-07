import { Router } from "express";
import {
  DeleteVetById,
  GetAllVets,
  GetVetById,
  UpdateVetById,
  createNewVet,
  loginVet,
} from "../controllers/vet.controllers.js";
import { body } from "express-validator";
import ValidateDataMiddleware from "../middlewares/validation/ValidateData.middleware.js";

const vetsRoutes = Router();

// Ruta para obtener todos los vets
vetsRoutes.get("/", GetAllVets);

// Ruta para obtener un usuario por ID
vetsRoutes.get("/:id", GetVetById);

// Ruta para login
vetsRoutes.post("/login", loginVet);

vetsRoutes.post(
  "/",
  [
    body("nameowner", "nameowner not valid").exists().isString(),
    body("password", "password invalid").exists().isString().isLength({
      min: 1,
      max: 10,
    }),
    ValidateDataMiddleware,
  ],
  createNewVet
);

// Ruta para modificar un usuario por ID
vetsRoutes.patch("/:id", UpdateVetById);

// Ruta para eliminar un usuario por ID
vetsRoutes.delete("/:id", DeleteVetById);

export default vetsRoutes;
