import { Router } from "express";
import citiesRouter from "./cities.js"; 
import itinerariesRouter from "./itineraries.js";
import activitiesRouter from './activities.js'; 
import User from "./users.js";
import error_405 from "../middleware/error_405.js";
import auth from "./auth.js"



const router = Router();

router.use("/cities", citiesRouter,error_405); 
router.use("/itineraries", itinerariesRouter);
router.use("/activities", activitiesRouter);
router.use("/users", User)
router.use("/auth", auth)
console.log("Llamando al middleware de autenticación en ruta '/all'");

export default router;


