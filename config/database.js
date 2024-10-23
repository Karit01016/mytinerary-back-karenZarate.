import mongoose from "mongoose"



let url = process.env.URI_MONGO    
            
async function conexionBaseDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("conectado  a Base de Datos");
        
    } catch (error) {
        console.log(error);              
        
    }
}
conexionBaseDatos()