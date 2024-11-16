

const validateItinerary = (req, res, next) => { 
  const { nameItinerary, photoItinerary, price, duration, hashtags } = req.body;

  // Validar que `nameItinerary` y `photoItinerary` sean strings
  if (typeof nameItinerary !== 'string' || typeof photoItinerary !== 'string') {
    return res.status(400).json({ error: 'Name and photo must be strings' });
  }

  // Validar que `price` esté entre 1 y 5
  if (typeof price !== 'number' || price < 1 || price > 5) {
    return res.status(400).json({ error: 'Price must be a number between 1 and 5' });
  }

  // Validar que `duration` sea un número
  if (typeof duration !== 'number') {
    return res.status(400).json({ error: 'Duration must be a number' });
  }

  // Validar que `hashtags` sea un array de strings
  if (!Array.isArray(hashtags) || !hashtags.every(tag => typeof tag === 'string')) {
    return res.status(400).json({ error: 'Hashtags must be an array of strings' });
  }

  next(); // Si todo es válido, pasa al siguiente middleware/controlador
};

export default validateItinerary;

  