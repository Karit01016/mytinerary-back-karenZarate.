import { Router } from "express";
import { allUsers, oneUser, userById } from "../controllers/users/read.js";
import updateUsers from "../controllers/users/update.js";
import { deleteOne, deleteMany } from "../controllers/users/delete.js";
import  register  from "../controllers/users/register.js";
import validator from "../middleware/validator.js";
import accountExist from "../middleware/accountExist.js";
import  schemaUserCreate  from "../schemas/users/create.js";
import createHash from "../middleware/createHash.js";
import passport from "../middleware/passport.js";

// Rutas para obtener usurarios

const routerUsers = Router();
routerUsers.get("/all", allUsers);
routerUsers.get("/oneUser/:id",passport.authenticate('jwt', { session: false }), oneUser);
routerUsers.get("/userById/:id", passport.authenticate('jwt', { session: false }),userById);
routerUsers.put("updateOne",passport.authenticate('jwt', { session: false }), updateUsers);

// crear usuarios

routerUsers.post("/register", validator(schemaUserCreate), accountExist, createHash, register);


// delete users

routerUsers.delete("/deleteOne", passport.authenticate('jwt', { session: false }), deleteOne);
routerUsers.delete("/deleteMany", passport.authenticate('jwt', { session: false }), deleteMany);

export default routerUsers;