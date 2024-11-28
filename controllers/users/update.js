import User from "../../models/User.js";

const updateUsers = async (req, res, next) => {
    try {

        let userUpdates = req.body;
        validarCity(userUpdates.city);

        let update = await User.findOneAndUpdate(
            { name: userUpdates.name },
            { city: userUpdates.city }
        )
        return res.status(200).json({
            response: update
    })

    } catch (error) {
        next(error);

    }
}
export default updateUsers



