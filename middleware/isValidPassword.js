import bcryptjs from "bcryptjs";

export default (req, res, next) => {
    let passwordInputUser = req.body.password; // traigo la password que ingreso el usuario
    let passwordDataBase = req.userLogin.Password; // traigo el password que guarde en el middleware not existe

    let compare = bcryptjs.compareSync( // aaqui ponemos el hash de la base de datos
        passwordInputUser, 
        passwordDataBase
    )

if (compare) {
    delete req.body.password
    return next();
}
return res.status(400).json({
    success: false,
    messages: "Password o user invalid, try again "
})

}



