

import Itinerary from '../../models/Itinerary.js';

const deleteItinerary = async (req, res, next) => {
  try {
    const { id } = req.params; // Toma el ID del itinerario desde los parámetros de la URL
    await Itinerary.findByIdAndDelete(id); // Elimina el itinerario
    res.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export default deleteItinerary;
