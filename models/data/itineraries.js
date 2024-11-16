import mongoose from "mongoose";
import Itinerary from "../Itinerary.js";
import "dotenv/config.js";
import "../../config/database.js";



const itineraries = [
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc1"),
    nameItinerary: "Through the Fields",
    photoItinerary: "https://c8.alamy.com/comp/B4XC83/children-running-through-tall-wheat-field-B4XC83.jpg",
    price: 4,
    duration: 6,
    likes: 0,
    hashtags: ["#nature", "#peace"],
    userName: "Braxton",
    userPhoto: "https://media.istockphoto.com/id/1368477551/es/foto/joven-atleta-sonriente-en-un-parque-p%C3%BAblico.jpg?s=612x612&w=0&k=20&c=tPj7LDbs11E7vQktC-oAeULmRYdtoj17psU8Mz7kA40="
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc3"),
    nameItinerary: "Urban Adventure",
    photoItinerary: "https://cdn.walltopia.com/wp-content/uploads/20231027203513/ua1.jpg",
    price: 3,
    duration: 4,
    likes: 0,
    hashtags: ["#adventure", "#urban"],
    userName: "Jane Doe",
    userPhoto: "https://palmira.gov.co/wp-content/uploads/2022/04/women.jpeg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc3"),
    nameItinerary: "Cultural Exploration",
    photoItinerary: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 5,
    duration: 8,
    likes: 0,
    hashtags: ["#culture", "#history"],
    userName: "Lara",
    userPhoto: "https://weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc3"),
    nameItinerary: "Food Lovers Tour",
    photoItinerary: "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 2,
    duration: 3,
    likes: 0,
    hashtags: ["#foodie", "#localfood"],
    userName: "James",
    userPhoto: "https://img.freepik.com/foto-gratis/disparo-cintura-arriba-hombre-europeo-joven-feliz-contento-camiseta-roja-moda_176420-24330.jpg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbd"),
    nameItinerary: "Romantic Escape",
    photoItinerary: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4,
    duration: 5,
    likes: 0,
    hashtags: ["#romance", "#escape"],
    userName: "Anna",
    userPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNz-Y-fisl4TZOJyLTLtxn66o4oYrHN12fyw&shttps://cistitisderepeticion.com/wp-content/uploads/2015/12/sexo-mujer-cistitis-infeccion-urinaria-960x720.jpg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc3"),
    nameItinerary: "Nightlife Extravaganza",
    photoItinerary: "https://www.travelandleisure.com/thmb/LQxFp6RhJ2F8tenzbbvc3f6E4eY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/le-blanc-cancun-couple-pool-time-ROMANTICO0121-2cb6244620fd4442bed1f313f68b0310.jpg",
    price: 3,
    duration: 6,
    likes: 0,
    hashtags: ["#nightlife", "#party"],
    userName: "Tom",
    userPhoto: "https://catalogosmetro.metro.pe/coleccion/catalogo-urb-otonio-2024/productos/img-hombre-nuevo.jpg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc7"),
    nameItinerary: "Historical Downtown Tour",
    photoItinerary: "https://cdn.getyourguide.com/img/tour/63ab2d72dba42.jpeg/98.jpg",
    price: 5,
    duration: 7,
    likes: 0,
    hashtags: ["#history", "#downtown"],
    userName: "William",
    userPhoto: "https://img.freepik.com/foto-gratis/joven-hombre-negocios-seguro-apuesto-que-senala-dedo-mientras-enfrenta-fondo-aislado_662251-801.jpg?semt=ais_hybrid"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc1"),
    nameItinerary: "Nature and Wildlife",
    photoItinerary: "https://images.pexels.com/photos/416921/pexels-photo-416921.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["#nature", "#wildlife"],
    userName: "Sophia",
    userPhoto: "https://media.istockphoto.com/id/1326417862/es/foto/mujer-joven-riendo-mientras-se-relaja-en-casa.jpg?s=612x612&w=0&k=20&c=BQHE9M8b6hixE_TB1XzuvxobnyD4ylKMTprVbrhPxOU="
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc7"),
    nameItinerary: "River Cruise Experience",
    photoItinerary: "https://www.scenic.eu/-/media/project/scenic/scenic-tours/river/river-experience/sr_scenic_sapphire_avignon_frac_005-(1).jpg?rev=9fd17ebd22dc42fb98dd1b96a158c353",
    price: 3,
    duration: 3,
    likes: 0,
    hashtags: ["#cruise", "#river"],
    userName: "Oliver",
    userPhoto: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc7"),
    nameItinerary: "City Lights Tour",
    photoItinerary: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ztyiq2jzkxh6fngv8prm/KL%20City%20of%20Lights%20Tour%20with%20Hop-on%20Hop-off%20Bus.jpg",
    price: 5,
    duration: 2,
    likes: 0,
    hashtags: ["#citylights", "#nighttour"],
    userName: "Liam",
    userPhoto: "https://previews.123rf.com/images/alend44/alend441702/alend44170200074/72423219-retrato-de-hombres-j%C3%B3venes-atractivos-aislado-en-blanco.jpg"
  },

  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbd"),
    nameItinerary: "Through the Fields",
    photoItinerary: "https://c8.alamy.com/comp/B4XC83/children-running-through-tall-wheat-field-B4XC83.jpg",
    price: 4,
    duration: 6,
    likes: 0,
    hashtags: ["#nature", "#peace"],
    userName: "Braxton",
    userPhoto: "https://media.istockphoto.com/id/1368477551/es/foto/joven-atleta-sonriente-en-un-parque-p%C3%BAblico.jpg?s=612x612&w=0&k=20&c=tPj7LDbs11E7vQktC-oAeULmRYdtoj17psU8Mz7kA40="
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdce"),
    nameItinerary: "City Lights",
    photoItinerary: "https://c8.alamy.com/comp/DEW8R0/city-lights-in-the-evening-DEW8R0.jpg",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#cityscape", "#nightlife"],
    userName: "Emily",
    userPhoto: "https://media.istockphoto.com/id/1212345678/photo/happy-woman-in-urban-environment.jpg?s=612x612&w=0&k=20&c=abcdfghijklmnop"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdce"),
    nameItinerary: "Mountain Adventure",
    photoItinerary: "https://c8.alamy.com/comp/M4C3J7/hiking-mountain-adventure.jpg",
    price: 3,
    duration: 8,
    likes: 0,
    hashtags: ["#mountains", "#hiking"],
    userName: "Liam",
    userPhoto: "https://media.istockphoto.com/id/3456789123/photo/portrait-of-young-man.jpg?s=612x612&w=0&k=20&c=xyzqrstuvwxyz"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdce"),
    nameItinerary: "Beach Relaxation",
    photoItinerary: "https://c8.alamy.com/comp/A7W3L4/beach-relaxation.jpg",
    price: 3,
    duration: 4,
    likes: 0,
    hashtags: ["#beach", "#sunset"],
    userName: "Sophia",
    userPhoto: "https://media.istockphoto.com/id/9876543210/photo/portrait-of-young-woman-on-the-beach.jpg?s=612x612&w=0&k=20&c=lmnopqrstuvw"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbf"),
    nameItinerary: "Cultural Tour",
    photoItinerary: "https://c8.alamy.com/comp/D3Y7N9/cultural-tour-of-city.jpg",
    price: 5,
    duration: 5,
    likes: 0,
    hashtags: ["#culture", "#history"],
    userName: "James",
    userPhoto: "https://media.istockphoto.com/id/7654321987/photo/man-in-museum.jpg?s=612x612&w=0&k=20&c=hijklmnopqrst"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbf"),
    nameItinerary: "Countryside Cycling",
    photoItinerary: "https://c8.alamy.com/comp/B2R5F8/countryside-cycling.jpg",
    price: 4,
    duration: 3,
    likes: 0,
    hashtags: ["#cycling", "#nature"],
    userName: "Oliver",
    userPhoto: "https://media.istockphoto.com/id/5678901234/photo/man-on-bicycle.jpg?s=612x612&w=0&k=20&c=uvwxyzabcdef"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbf"),
    nameItinerary: "Foodie Adventure",
    photoItinerary: "https://c8.alamy.com/comp/E2R9X6/street-food-market.jpg",
    price: 5,
    duration: 2,
    likes: 0,
    hashtags: ["#food", "#gourmet"],
    userName: "Ava",
    userPhoto: "https://media.istockphoto.com/id/3456781234/photo/young-woman-eating.jpg?s=612x612&w=0&k=20&c=qrstuvwxyzabc"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc0"),
    nameItinerary: "Wildlife Safari",
    photoItinerary: "https://c8.alamy.com/comp/D7F4C9/safari-jeep-wildlife.jpg",
    price: 4,
    duration: 6,
    likes: 0,
    hashtags: ["#wildlife", "#safari"],
    userName: "Mason",
    userPhoto: "https://media.istockphoto.com/id/1234567890/photo/young-man-on-safari.jpg?s=612x612&w=0&k=20&c=abcdefghij"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdc0"),
    nameItinerary: "Snowy Peaks",
    photoItinerary: "https://c8.alamy.com/comp/F5G3H7/snowy-mountains.jpg",
    price: 2,
    duration: 9,
    likes: 0,
    hashtags: ["#snow", "#adventure"],
    userName: "Lucas",
    userPhoto: "https://media.istockphoto.com/id/7890123456/photo/man-in-snow.jpg?s=612x612&w=0&k=20&c=fghijklmnop"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdcc"),
    nameItinerary: "Desert Excursion",
    photoItinerary: "https://c8.alamy.com/comp/E3D9G6/desert-exploration.jpg",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["#desert", "#exploration"],
    userName: "Charlotte",
    userPhoto: "https://media.istockphoto.com/id/6789012345/photo/woman-in-desert.jpg?s=612x612&w=0&k=20&c=qrstuvwxyz"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdcc"),
    nameItinerary: "Forest Retreat",
    photoItinerary: "https://c8.alamy.com/comp/E8H6J5/forest-walking.jpg",
    price: 5,
    duration: 5,
    likes: 0,
    hashtags: ["#forest", "#peaceful"],
    userName: "Ella",
    userPhoto: "https://media.istockphoto.com/id/1123456789/photo/young-woman-in-forest.jpg?s=612x612&w=0&k=20&c=lmnopqrstuv"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbb"),
    nameItinerary: "Urban Exploration",
    photoItinerary: "https://c8.alamy.com/comp/A9X5R2/city-tour.jpg",
    price: 3,
    duration: 2,
    likes: 0,
    hashtags: ["#urban", "#tour"],
    userName: "Amelia",
    userPhoto: "https://media.istockphoto.com/id/1098765432/photo/young-woman-in-city.jpg?s=612x612&w=0&k=20&c=abcdefghijkl"
  },
  {
    cityId: new mongoose.Types.ObjectId("6719a30ddf9da483cdb9bdbb"),
    nameItinerary: "Seaside Adventure",
    photoItinerary: "https://c8.alamy.com/comp/B4E5T6/seaside-adventure.jpg",
    price: 5,
    duration: 6,
    likes: 0,
    hashtags: ["#sea", "#waves"],
    userName: "Henry",
    userPhoto: "https://media.istockphoto.com/id/1324567890/photo/man-on-beach.jpg?s=612x612&w=0&k=20&c=mnopqrstu"
  },

]


Itinerary.insertMany(itineraries)