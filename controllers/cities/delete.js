import City from "../../models/City.js";

const deleteOne = async (req, res, next) => {
  try {
    // Llamada correcta a `deleteOne` como función, pasando el filtro de búsqueda
    let result = await City.deleteOne({
      name: req.body.name  // Busca la ciudad por nombre en `req.body`
    });
 
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.status(200).json({
      success: true,
      message: "City deleted successfully",
      data: result
    });

  } catch (error) {
    // Manejo de errores, pasa el error al siguiente middleware
    next(error);
  }
};

export default deleteOne;
