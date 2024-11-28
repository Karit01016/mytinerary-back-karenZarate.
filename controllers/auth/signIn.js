import user from "../../models/User.js";


export default async (req, res, next) => {
    try {
        await user.findOneAndUpdate(
            {email: req.userLogin.email}, // nos da el token
            {online: true} // lo pone en true al usuario. o inicia sesion
        )
        return res.status(200).json({
             success: true,
            mesasages: "User online",
            userlogin: {
                email:req.userLogin.email,
                photo: req.userLogin.photo,
                role: req.userLogin.role
            },
            token: req.tokenNew
        
        
        })
    } catch (error) {
        next(error);
        
    }
}