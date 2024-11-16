import { Schema, model } from "mongoose"; 

const collection = "itineraries"


const itinerarySchema = new Schema({
  cityId: { 
    type: Schema.Types.ObjectId,  
    required: true 
  },
  nameItinerary: { 
    type: String, 
    required: true 
  },
  photoItinerary: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  duration: { 
    type: Number, 
    required: true 
  },
  likes: { 
    type: Number, 
    default: 0 
  },
  hashtags: { 
    type: Array
  },
  userName: {
    type: String, 
  },
  userPhoto:{
    type: String
  }
});

let Itinerary = model(collection, itinerarySchema)
export default Itinerary;


