
import Itinerary from '../../models/Itinerary.js';

const createItinerary = async (req, res, next) => {
  try {
    const newItinerary = new Itinerary(req.body); 
    const savedItinerary = await newItinerary.save(); 
    res.status(201).json(savedItinerary); 
  } catch (error) {
    next(error);
  }
};

export default createItinerary;
