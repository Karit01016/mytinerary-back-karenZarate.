import mongoose from "mongoose";
import Activity from "../../models/Activity.js";

const getActivitiesByItinerary = async (req, res, next) => {
  try {
    const { itineraryId } = req.params;

    // Validación del formato del itineraryId
    if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid itineraryId format",
      });
    }

    // Convertir el itineraryId a ObjectId
    const objectId = new mongoose.Types.ObjectId(itineraryId);

    const activities = await Activity.find({ itineraryId: objectId });

    if (!activities || activities.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No activities found for this itinerary",
      });
    }

    return res.status(200).json({
      success: true,
      response: activities,
    });
  } catch (error) {
    // Manejo de errores más específico
    console.error("Error fetching activities by itinerary:", error);
    return res.status(500).json({
      success: false,
      message: "Server error: Could not retrieve activities",
      error: error.message, // Detalles adicionales del error
    });
  }
};

export { getActivitiesByItinerary };
