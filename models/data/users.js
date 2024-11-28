import mongoose from "mongoose";
import "dotenv/config.js"
import '../../config/database.js'
import User from '../User.js'
import Itinerary from "../Itinerary.js";

let users = [

    {
        "name": "Juan",
        "lastName": "Pérez",
        "email": "juan.perez@example.com",
        "password": "Password123",
        "role": "admin",
        "city": "Bogotá",
        "online": "true",
        "photo": "https://example.com/photos/juan.jpg",
        "country": "Colombia"
    },
    {
        "name": "María",
        "lastName": "Gómez",
        "email": "maria.gomez@example.com",
        "password": "Password456",
        "role": "user",
        "city": "Buenos Aires",
        "online": "false",
        "photo": "https://example.com/photos/maria.jpg",
        "country": "Argentina"
    },
    {
        "name": "Luis",
        "lastName": "Rodríguez",
        "email": "luis.rodriguez@example.com",
        "password": "Password789",
        "role": "user",
        "city": "Santiago",
        "online": "true",
        "photo": "https://example.com/photos/luis.jpg",
        "country": "Chile"
    },
    {
        "name": "Ana",
        "lastName": "Martínez",
        "email": "ana.martinez@example.com",
        "password": "Ana12345",
        "role": "user",
        "city": "Lima",
        "online": "false",
        "photo": "https://example.com/photos/ana.jpg",
        "country": "Perú"
    },
    {
        "name": "Carlos",
        "lastName": "Torres",
        "email": "carlos.torres@example.com",
        "password": "Carlos123",
        "role": "admin",
        "city": "Ciudad de México",
        "online": "true",
        "photo": "https://example.com/photos/carlos.jpg",
        "country": "México"
    },
    {
        "name": "Elena",
        "lastName": "Fernández",
        "email": "elena.fernandez@example.com",
        "password": "Elena456",
        "role": "user",
        "city": "Madrid",
        "online": "false",
        "photo": "https://example.com/photos/elena.jpg",
        "country": "España"
    },
    {
        "name": "Diego",
        "lastName": "López",
        "email": "diego.lopez@example.com",
        "password": "Diego789",
        "role": "user",
        "city": "Quito",
        "online": "true",
        "photo": "https://example.com/photos/diego.jpg",
        "country": "Ecuador"
    },
    {
        "name": "Camila",
        "lastName": "Ríos",
        "email": "camila.rios@example.com",
        "password": "Camila123",
        "role": "user",
        "city": "Caracas",
        "online": "false",
        "photo": "https://example.com/photos/camila.jpg",
        "country": "Venezuela"
    },
    {
        "name": "Sofía",
        "lastName": "Navarro",
        "email": "sofia.navarro@example.com",
        "password": "Sofia456",
        "role": "admin",
        "city": "Asunción",
        "online": "true",
        "photo": "https://example.com/photos/sofia.jpg",
        "country": "Paraguay"
    },
    {
        "name": "Javier",
        "lastName": "Mendoza",
        "email": "javier.mendoza@example.com",
        "password": "Javier789",
        "role": "user",
        "city": "Montevideo",
        "online": "false",
        "photo": "https://example.com/photos/javier.jpg",
        "country": "Uruguay"
    }


];

User.insertMany(users)



