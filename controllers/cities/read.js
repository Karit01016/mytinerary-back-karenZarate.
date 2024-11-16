import City from "../../models/City.js";

// Obtener todas las ciudades o filtrar por nombre
const allCities = async (req, res, next) => {
  
  
  try {
    const { name } = req.query; // Capturamos el parámetro de búsqueda 'name' de la consulta
    let query = {};

    // Si hay un parámetro 'name', configuramos el filtro con regex para hacer la búsqueda insensible a mayúsculas y minúsculas
    if (name) {
      query.name = { $regex: "^" + name, $options: "i" };
    }

    // Ejecutamos la consulta en la base de datos
    const cities = await City.find(query);

    // Verificamos si no se encontraron ciudades
    if (cities.length === 0) {
      return res.status(200).json({
        response: `No cities found with the name: ${name}`,
      });
    }

    // Devolvemos las ciudades encontradas
    res.status(200).json({ response: cities });
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ success: false, message: "Error fetching cities" });
  }
};

// Buscar ciudad específica por nombre en los parámetros
const citiesByname = async (req, res, next) => {
  try {
    const name = req.params.name;
    const regexName = name ? { $regex: "^" + name, $options: "i" } : "";

    // Buscamos las ciudades que coinciden con el nombre proporcionado
    const cities = await City.find({ name: regexName });

    if (cities.length === 0) {
      return res.status(200).json({
        response: `No city found with the name: ${name}`,
      });
    }

    return res.status(200).json({ response: cities });
  } catch (error) {
    next(error);
  }
};

// Obtener una ciudad por ID
const getCityById = async (req, res) => {
  try {
    let { id } = req.params;

    // Eliminar espacios o saltos de línea del ID
    id = id.trim();

    // Buscar directamente la ciudad por ID sin validar
    const city = await City.findById(id);

    if (!city) {
      return res.status(404).json({ success: false, message: "City not found" });
    }

    res.status(200).json({ success: true, response: city });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Exportamos las funciones
export { allCities, citiesByname, getCityById };
