import { Router } from "express";
import citiesRouter from "./cities.js"; 
import itinerariesRouter from "./itineraries.js";
import activitiesRouter from './activities.js'; 
import error_405 from "../middleware/error_405.js";



const router = Router();

router.use("/cities", citiesRouter,error_405); 
router.use("/itineraries", itinerariesRouter);
router.use("/activities", activitiesRouter);

export default router;
