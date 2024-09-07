import Pets from "../models/pets.js";

// Controlador para obtener todos los pets
export const GetAll = async (req, res) => {
  const petsKey = await Pets.findAll();
  res.json(petsKey);
};


