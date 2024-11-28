import { Router } from "express";
import passport from "../middleware/passport.js";
import { getAllItineraries, getItinerariesByCity, getItineraryById } from '../controllers/itineraries/read.js';
import createItinerary from '../controllers/itineraries/create.js';
import updateItinerary from '../controllers/itineraries/update.js';
import deleteItinerary from '../controllers/itineraries/delete.js';
import validateItinerary from '../middleware/validateItinerary.js';



const router = Router();

// Rutas para itinerarios
router.post('/create', passport.authenticate('jwt', { session: false }), validateItinerary, createItinerary);
router.get('/all',  getAllItineraries);
router.get("/city/:cityId", passport.authenticate('jwt', { session: false }), getItinerariesByCity);
router.get("/:id",passport.authenticate('jwt', { session: false }), getItineraryById);
router.put('/:id', passport.authenticate('jwt', { session: false }), validateItinerary, updateItinerary);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteItinerary);

export default router;
