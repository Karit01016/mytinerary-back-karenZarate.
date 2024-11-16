import Activity from "../../models/Activity.js";

const deleteActivity = async (req, res, next) => {
  try {
    const { id } = req.params; // Asegúrate de usar el parámetro `id` correctamente
    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).json({
        success: false,
        response: "Activity not found",
      });
    }

    return res.status(200).json({
      success: true,
      response: "Activity successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

export { deleteActivity }; // Exporta la función
