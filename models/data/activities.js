import mongoose from 'mongoose';
import "dotenv/config.js"; 
import "../../config/database.js";
import Activity from '../Activity.js';

const activities = [
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),  
    name: "City Walking Tour",
    description: "Explore the main landmarks of the city with a guided tour.",
    duration: 120
  },
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),
    name: "Museum Visit",
    description: "A deep dive into the city's art and history museum.",
    duration: 90
  },
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),
    name: "River Boat Ride",
    description: "Enjoy a relaxing boat ride along the city's main river.",
    duration: 60
  },
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),
    name: "Food Tasting Tour",
    description: "Sample delicious local foods at famous spots across the city.",
    duration: 45
  },
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),
    name: "Historic District Tour",
    description: "Walk through the historic areas and learn about the city's past.",
    duration: 75
  },
  {
    itineraryId: new mongoose.Types.ObjectId("67298aba1c4ec6b2c94d106d"),
    name: "Nightlife Experience",
    description: "Experience the city's vibrant nightlife with a local guide.",
    duration: 150
  }
];

Activity.insertMany(activities)
