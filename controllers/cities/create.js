import City from "../../models/City.js";
//interactua y me da las funciones para poderme conectar con el.

let createOneCity = async (req, res, next) => {
  try {
    let city = req.body; //en el   body va toda la informacion mportante
    let createCity= await City.create(city);
    return res.status(201).json({
      response: createCity,
    });
  } catch (error) {
    next(error);
  }
};


export { createOneCity };