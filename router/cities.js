import { Router } from "express";
import { allCities, citiesByname, getCityById } from "../controllers/cities/read.js";
import { createOneCity } from "../controllers/cities/create.js";

const router = Router(); // Creamos el enrutador

// Rutas para obtener ciudades
router.get("/all", allCities);
router.get("/name/:name", citiesByname);
router.get("/cityById/:id", getCityById);

// Ruta para crear una ciudad
router.post("/create", createOneCity);

export default router;
