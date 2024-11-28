import { Router } from "express"
import accountNotExist from "../middleware/accountNotExist.js";
import signIn from "../controllers/auth/signIn.js"
import signOuT from "../controllers/auth/signOut.js"
import isValidPassword from "../middleware/isValidPassword.js";
import generateToken from "../middleware/generateToken.js";
import passport from "../middleware/passport.js";
import passportGoogle from "../middleware/passportGoogle.js";



const routerAuth = Router();

routerAuth.post("/signin", accountNotExist, isValidPassword, generateToken, signIn);
routerAuth.post("/signOut", passport.authenticate('jwt', { session: false }), signOuT);

// routes para iniciar sesion con google
routerAuth.get('signin/google', passportGoogle.authenticate('google', { session: false,  scope:['profile', 'email'] })
)
// rutas para iniciar sesion con google callback
routerAuth.get(
    '/signin/google/callback', 
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signIn
)

export default routerAuth

