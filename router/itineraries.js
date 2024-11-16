import { Router } from "express";
import { getAllItineraries, getItinerariesByCity, getItineraryById } from '../controllers/itineraries/read.js';
import createItinerary from '../controllers/itineraries/create.js';
import updateItinerary from '../controllers/itineraries/update.js';
import deleteItinerary from '../controllers/itineraries/delete.js';
import validateItinerary from '../middleware/validateItinerary.js';


const router = Router();

// Rutas para itinerarios
router.post('/create', validateItinerary, createItinerary);
router.get('/all', getAllItineraries);
router.get("/city/:cityId", getItinerariesByCity);
router.get("/:id", getItineraryById);
router.put('/:id', validateItinerary, updateItinerary);
router.delete('/:id', deleteItinerary);

export default router;
