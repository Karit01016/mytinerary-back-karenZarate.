import Activity from "../../models/Activity.js";

const createActivity = async (req, res, next) => {
    try {
      const activity = new Activity(req.body);
      await activity.save();
      res.status(201).json(activity);
    } catch (error) {
      next(error);
    }
  };
  export {createActivity};
  