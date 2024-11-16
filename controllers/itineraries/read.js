
import Itinerary from '../../models/Itinerary.js';
import mongoose from 'mongoose';

//  todos los itinerarios
const getAllItineraries = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find(); // Busca todos los itinerarios
    res.json(itineraries);
  } catch (error) {
    next(error);
  }
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
// Obtener itinerarios de una ciudad específica 




const getItinerariesByCity = async (req, res) => {
  try {
    let { cityId } = req.params;

    // Limpiar el cityId de espacios y saltos de línea
    // // cityId = cityId.trim();

    // Verificar si el ID es válido
    if (!mongoose.Types.ObjectId.isValid(cityId)) {
      return res.status(400).json({ success: false, message: 'Invalid city ID format' });
    }

    // Buscar los itinerarios que coincidan con el cityId
    const itineraries = await Itinerary.find({ cityId:cityId });

    res.status(200).json({ success: true, response: itineraries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ success: false, message: "Itinerary not found" });
    }
    res.json({ success: true, response: itinerary });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching itinerary", error });
  }
};


export { getAllItineraries,getItinerariesByCity , getItineraryById };


