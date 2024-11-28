 import { Schema, model } from "mongoose";


 let collection = "Users"
 let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: false },   
    online : { type: Boolean, required: false },
    photo: { type: String, required: true },
    country: { type: String, required: true },
   

 },
{
   timestamps: true
 })

 let User = model(collection, schema)
 export default User

 
