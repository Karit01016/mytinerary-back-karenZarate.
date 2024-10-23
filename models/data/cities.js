import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const cities = [
  {
    name: "New York",
    photo: "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg",
    country: "United States",
    continent: "North America",
    description: "Known as the 'Big Apple', it is a global center for finance, art, and entertainment.",
    currency: 1 // USD
  },
  {
    name: "Tokyo",
    photo: "https://travelgranadatour.com/wp-content/uploads/2018/09/destination-tokyo-01-1280x854.jpg",
    country: "Japan",
    continent: "Asia",
    description: "One of the world's most populated cities and a major financial hub in Asia.",
    currency: 147 // JPY (approximate USD conversion rate)
  },
  {
    name: "Paris",
    photo: " https://img.freepik.com/foto-gratis/famosa-torre-eiffel-paris-hermosos-colores_268835-830.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "France",
    continent: "Europe",
    description: "The capital of France, famous for the Eiffel Tower and rich cultural heritage.",
    currency: 0.95 // EUR
  },
  {
    name: "Sydney",
    photo: "https://img.freepik.com/foto-gratis/hermosa-foto-puente-puerto-sydney-cielo-azul-rosa-claro_181624-16041.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "Australia",
    continent: "Australia",
    description: "Known for its Sydney Opera House and beautiful harbor.",
    currency: 1.5 // AUD
  },
  {
    name: "Cairo",
    photo: "https://img.freepik.com/foto-gratis/joven-caminando-gran-esfinge-giza_181624-51674.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "Egypt",
    continent: "Africa",
    description: "Home to the Great Pyramids and a major cultural center in Africa.",
    currency: 30 // EGP (approximate USD conversion rate)
  },
  {
    name: "Buenos Aires",
    photo: "https://img.freepik.com/foto-gratis/vista-aerea-compleja-ciudad_23-2148975280.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "Argentina",
    continent: "South America",
    description: "The 'Paris of South America', known for its European architecture and tango culture.",
    currency: 350 // ARS
  },
  {
    name: "Moscow",
    photo: "https://t4.ftcdn.net/jpg/00/43/77/51/240_F_43775107_WLmyOa0MibPtTdqjpmM4HuU0sCGJUN1q.jpg",
    country: "Russia",
    continent: "Europe",
    description: "Russia's capital, famous for the Red Square and the Kremlin.",
    currency: 97 // RUB
  },
  {
    name: "Dubai",
    photo: "https://img.freepik.com/foto-gratis/modetn-ciudad-centro-lujo-dubai-emiratos-arabes-unidos_231208-7596.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "United Arab Emirates",
    continent: "Asia",
    description: "A major financial center in the Middle East, known for its modern architecture.",
    currency: 3.67 // AED
  },
  {
    name: "London",
    photo: "https://img.freepik.com/foto-gratis/big-ben-puente-westminster-al-atardecer-londres-reino-unido_268835-1395.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "United Kingdom",
    continent: "Europe",
    description: "The capital of the UK, famous for its history, landmarks, and financial district.",
    currency: 0.75 // GBP
  },
  {
    name: "Mumbai",
    photo: "https://img.freepik.com/foto-gratis/tiro-angulo-alto-bandra-worli-sealink-mumbai-envuelto-niebla_181624-7892.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "India",
    continent: "Asia",
    description: "India's financial capital and home to the Bollywood film industry.",
    currency: 83 // INR
  },
  {
    name: "Beijing",
    photo: "https://img.freepik.com/foto-gratis/panorama-arquitectura-historica-ciudad-prohibida-beijing-china_649448-35.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "China",
    continent: "Asia",
    description: "The capital of China, known for its historical landmarks like the Great Wall.",
    currency: 7.31 // CNY
  },
  {
    name: "São Paulo",
    photo: "https://t3.ftcdn.net/jpg/03/19/82/16/240_F_319821630_gwDPzcvD50s9zSrrHFMJyE5R0RSYAtig.jpg",
    country: "Brazil",
    continent: "South America",
    description: "Brazil's largest city and a major cultural and economic center in Latin America.",
    currency: 5.3 // BRL
  },
  {
    name: "Berlin",
    photo: "https://t4.ftcdn.net/jpg/01/23/85/47/240_F_123854792_IOchHaXcgLSVZGWFRN5JCk1YppmIfzQn.jpg",
    country: "Germany",
    continent: "Europe",
    description: "Germany's capital, famous for its art scene and historical significance.",
    currency: 0.95 // EUR
  },
  {
    name: "Cape Town",
    photo: "https://t4.ftcdn.net/jpg/06/23/83/37/240_F_623833773_ehVfL5YtDMO8BqRrP7SxhTecU3ryQQyj.jpg",
    country: "South Africa",
    continent: "Africa",
    description: "A major city in South Africa, known for its harbor and Table Mountain.",
    currency: 19 // ZAR
  },
  {
    name: "Seoul",
    photo: "https://img.freepik.com/foto-gratis/torre-seul-techo-gyeongbokgung-hojas-arce-otono-rojo-montana-namsan-corea-sur_335224-419.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "South Korea",
    continent: "Asia",
    description: "South Korea's capital, known for its skyscrapers, technology, and traditional palaces.",
    currency: 1350 // KRW
  },
  {
    name: "Madrid",
    photo: "https://img.freepik.com/foto-gratis/palacio-cibeles-es-mas-destacado-edificios-plaza-cibeles-madrid-espana_268835-1305.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "Spain",
    continent: "Europe",
    description: "The capital of Spain, known for its Royal Palace and Prado Museum.",
    currency: 0.95 // EUR
  },
  {
    name: "Mexico City",
    photo: "https://t4.ftcdn.net/jpg/02/51/65/17/240_F_251651709_Zax5TPE5ACPinewEmy98P7pDRd4O1xVR.jpg",
    country: "Mexico",
    continent: "North America",
    description: "Mexico's capital, famous for its Aztec heritage and vibrant culture.",
    currency: 18 // MXN
  },
  {
    name: "Bangkok",
    photo: "https://img.freepik.com/foto-gratis/paisaje-urbano-noche-bangkok-tailandia_335224-1020.jpg?uid=R156136059&ga=GA1.1.1296032633.1729713489&semt=ais_hybrid",
    country: "Thailand",
    continent: "Asia",
    description: "Thailand's capital, known for its ornate temples and vibrant street life.",
    currency: 37 // THB
  },
  {
    name: "Rome",
    photo: "https://t3.ftcdn.net/jpg/02/27/88/36/240_F_227883696_tvfOO6syjvdRJYZls1FvCSgUqfVAcNXL.jpg",
    country: "Italy",
    continent: "Europe",
    description: "Italy's capital, famous for its ancient ruins, art, and the Vatican.",
    currency: 0.95 // EUR
  },
  {
    name: "Toronto",
    photo: "https://t3.ftcdn.net/jpg/02/09/58/58/240_F_209585829_NSOqdMwXdO5Q0zsqJyAWzuFSQ69WGlSU.jpg",
    country: "Canada",
    continent: "North America",
    description: "A major Canadian city, known for its CN Tower and diverse culture.",
    currency: 1.3 // CAD
  }
];

City.insertMany(cities)
  