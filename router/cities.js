import { Router } from "express";
import passport from "../middleware/passport.js";
import { allCities, citiesByname, getCityById } from "../controllers/cities/read.js";
import { createOneCity } from "../controllers/cities/create.js";
import validator from "../middleware/validator.js";
import  Schema_cities_create  from "../schemas/cities/create.js";

const router = Router(); // Creamos el enrutador

// Rutas para obtener ciudades
router.get("/all",   allCities);
router.get("/name/:name", passport.authenticate('jwt', { session: false }), citiesByname);
router.get("/cityById/:id", passport.authenticate('jwt', { session: false }), getCityById);

// Ruta para crear una ciudad
router.post("/create",passport.authenticate('jwt', { session: false }), validator(Schema_cities_create), createOneCity);

export default router;
