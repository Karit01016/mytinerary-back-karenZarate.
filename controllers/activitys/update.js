import Activity from "../../models/Activity.js"

export const updateActivity = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }
      res.status(200).json(updatedActivity);
    } catch (error) {
      next(error);
    }
  };
  