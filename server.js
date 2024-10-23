import express, { request, response } from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";

import indexRouter from "./router/index.js"; 
import not_found_handlers from "./middleware/not_found_handler.js"; // middleware 404
import error_handlers from "./middleware/error_handler.js"; // middleware 500
import error_400  from "./middleware/error_400.js";  // bad request mal info



const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log("Karen, vas bien, estás en el puerto");



server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

// ROUTER
server.use("/api", indexRouter); // Usamos el enrutador principal

// middlewares
server.use(error_400);
server.use(not_found_handlers); // Middleware para rutas no encontradas
server.use(error_handlers); // Middleware para errores del servidor


server.listen(PORT, ready);
