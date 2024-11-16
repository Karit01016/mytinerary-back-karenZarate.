
import { Schema, model } from "mongoose";

const activitySchema = new Schema({
  itineraryId: { type: Schema.Types.ObjectId, ref: "Itinerary", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }
});

const Activity = model("Activity", activitySchema);
export default Activity; // Exportación por defecto

