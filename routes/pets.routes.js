import { Router } from "express";
import {
  DeletePetById,
  GetAllPets,
  GetPetById,
  UpdatePetById,
  createNewPet,
} from "../controllers/pets.controllers.js";
import ValidateDataMiddleware from "../middlewares/validation/ValidateData.middleware.js";
import checkPetById from "../Middlewares/pets/checkId.js";
import petExists from "../Middlewares/pets/petExist.js";
import authorizateVet from "../Middlewares/vets/authorizateVet.js";
import { body } from "express-validator";

const petsRoutes = Router();

// Ruta para obtener todos los usuarios
petsRoutes.get("/", GetAllPets);

// Ruta para obtener un usuario por ID
petsRoutes.get("/:id", [checkPetById, petExists], GetPetById);
// [checkById, petExists]

// Ruta para crear un usuario
petsRoutes.post(
  "/",
  [
    body("namepet", "namepet not valid").exists().isString(),
    body("ownerpet", "ownerpet not valid").exists().isString(),
    body("cedpet", "cedpet invalid").exists().isString().isLength({
      min: 1,
      max: 5,
    }),
    ValidateDataMiddleware,
  ],
  createNewPet
);

// Ruta para modificar un usuario por ID
petsRoutes.patch("/:id", [checkPetById, petExists], UpdatePetById);

// Ruta para eliminar un usuario por ID
petsRoutes.delete(
  "/:id",
  [checkPetById, petExists, authorizateVet],
  DeletePetById
);
// [checkById, petExists]

export default petsRoutes;
