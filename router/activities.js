import { Router } from "express";
import {createActivity} from "../controllers/activitys/create.js"
import {getActivitiesByItinerary} from "../controllers/activitys/read.js"
import {updateActivity} from "../controllers/activitys/update.js"
import { deleteActivity } from "../controllers/activitys/delete.js";





const router = Router();


router.get("/itinerary/:itineraryId", getActivitiesByItinerary); // Ruta para consultar todas las actividades de un itinerario específico
router.post("/", createActivity);// Ruta para crear una nueva actividad
router.put("/:id", updateActivity); 
router.delete("/:id", deleteActivity); 


export default router;
