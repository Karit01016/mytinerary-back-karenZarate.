import City from "../../models/City.js";

const updateCity = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Validar que el ID sea un ObjectId válido
      const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);
      if (!isValidObjectId) {
        let error = new Error("Invalid city ID format");
        error.status = 400;
        throw error;
      }
  
      // Actualizar la ciudad utilizando el ID
      const updatedCity = await City.findByIdAndUpdate(id, req.body, {
        new: true, // Devuelve el documento actualizado
        runValidators: true, // Ejecuta las validaciones definidas en el esquema del modelo
      });
  
      // Verificar si se encontró la ciudad
      if (!updatedCity) {
        let error = new Error(`No city found with the ID: ${id}`);
        error.status = 404;
        throw error;
      }
  
      // Devolver la ciudad actualizada
      return res.status(200).json({
        response: updatedCity,
      });
    } catch (error) {
      next(error);
    }
  };
  export { updateCity };


  