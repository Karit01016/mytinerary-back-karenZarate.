import jwt from 'jsonwebtoken';



export default (req, res, next) => {

 const token = jwt.sign(
    {
        email: req.userLogin.email},
        process.env.SECRET,
        {expiresIn:60*60*24*7}
 )
 req.tokenNew = token;
 return next();

}