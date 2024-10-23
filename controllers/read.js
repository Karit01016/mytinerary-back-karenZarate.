import City from "../models/City.js";





let allCities = async (req, res,next) => {
  try {

    let {name}= req.query

    let query = {}

    if (name) {
        query.name = {$regex:  '^'+ name, $options: "i"}
    }

    let all = await City.find(query);
   
    return res.status(200).json({
      response: all, // que si lo enocntro ejecute este cambio
    });
  } catch (error) {
    next(error)
  ;
  }
};

let citiesByname = async (req, res,next) => {
  try {
    let namecities = (req.params.name); 
    console.log(namecities);

    let store = await City.find({ name: namecities }); 
        if (store.length === 0) {
      return res.status(404).json({
        response: `Not store found with the name: ${namecities}`,
      });
    }
    return res.status(200).json({
      response: store,
    });
  } catch (error) {
    next(error);
  }
};


const getCityById = async (req, res, next) => {
  try {
    
    let { id } = req.params; // Extrae el ID de los parámetros de la solicitud desestructurado
    
    let city = await City.findById(id); // Busca la ciudad por ID en la base de datos
    
    if (!city) {
      return res.status(200).json({
        response: `No city found with the ID: ${id}`,
      });
    }
 
    return res.status(200).json({        // Devuelve la ciudad encontrada
      response: city,
    });
  } catch (error) {
 
    next(error);
  }
};

export { allCities, citiesByname, getCityById,  };
