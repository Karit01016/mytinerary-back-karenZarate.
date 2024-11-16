

import Itinerary from '../../models/Itinerary.js';
import mongoose from 'mongoose';

const updateItinerary = async (req, res) => {
  try {
    let { id } = req.params;

    // Limpiar el id de espacios y saltos de línea
    id = id.trim();

    // Verificar si el ID es válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid itinerary ID format' });
    }

    // update
    const updatedItinerary = await Itinerary.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true, 
    });

    if (!updatedItinerary) {
      return res.status(404).json({ success: false, message: 'Itinerary not found' });
    }

    res.status(200).json({ success: true, response: updatedItinerary });
  } catch (error) {
    console.error('Update error:', error); 
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

export default updateItinerary;


