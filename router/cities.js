import {Router} from "express";
import { allCities, citiesByname,getCityById,} from "../controllers/read.js";
import { createOneCity } from "../controllers/create.js";



const router = Router(); // Creamos el enrutador

// Rutas para obtener ciudades
router.get("/all", allCities);
router.get("/name/:name", citiesByname);

router.get("/cityById/:id", getCityById);

// Ruta para crear una ciudad y lA validación
router.post("/create", createOneCity)
// modifica

export default router; 
