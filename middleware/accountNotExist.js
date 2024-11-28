import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let accountNotExist = await User.findOne({ email: req.body.email })
        if (accountNotExist) {
            req.userLogin = { // guardamos la informacion que el usuario nos brinde
                email: accountNotExist.email,
                Password: accountNotExist.password,
                role: accountNotExist.role,
                photo: accountNotExist.photo
            }
            return next()

        }
        return res.status(400).json({
            success: false,
            messages: "User does not exist, try again. "
        })
    } catch (error) {
        next(error)
    }
}



