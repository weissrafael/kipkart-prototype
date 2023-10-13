import Market from "../models/Market";

export const DATABASE = {
  7791293022598: {
    id: 7791293022598,
    name: "Rexona Motion",
    price: 8.7,
    category: "hygiene",
    imageUrl: require("../assets/products-image/rexona.jpg"),
  },
  7898409951886: {
    id: 7898409951886,
    name: "Ovomaltine Pronto",
    price: 4.49,
    category: "dairy",
    imageUrl: require("../assets/products-image/ovomaltine.png"),
  },
  7791293022581: {
    id: 7791293022581,
    name: "Rexona Men",
    price: 3.7,
    category: "hygiene",
    imageUrl: require("../assets/products-image/rexona.jpg"),
  },
  7891528029498: {
    id: 7891528029498,
    name: "Sorriso Tripla",
    price: 5.99,
    category: "hygiene",
    imageUrl: require("../assets/products-image/sorriso.jpg"),
  },
  7891242211179: {
    id: 7891242211179,
    name: "Uau Multiuso",
    price: 1.8,
    category: "snacks",
    imageUrl: require("../assets/products-image/uau.png"),
  },
  7897395020194: {
    id: 7897395020194,
    name: "Itaipava Malzbier",
    price: 4.79,
    category: "alcohol",
    imageUrl: require("../assets/products-image/itaipava.jpg"),
  },
  7613033174728: {
    id: 7613033174728,
    name: "Nescafé Dolce Gusto",
    price: 16.84,
    category: "coffee",
    imageUrl: require("../assets/products-image/dolcegusto.png"),
  },
  75058852: {
    id: 75058852,
    name: "Rexona motion sense rolom",
    price: 10.84,
    category: "hygiene",
    imageUrl: require("../assets/products-image/rexona.jpg"),
  },

  7894650003879: {
    id: 7894650003879,
    name: "Raid",
    price: 12.11,
    category: "coffee",
    imageUrl: require("../assets/products-image/raid.png"),
  },
};

const bazinBarraFachada = require("../assets/fachadabazinhobarra.png");
const bazinDornelasFachada = require("../assets/fachadabazinhodornelas.jpg");
const bazinJoaoFachada = require("../assets/bazinhoj23fachada.jpg");

export const MARKETS = [
  new Market("1", "Bazinho Barra", bazinBarraFachada, "Av Barra 321", DATABASE),
  new Market(
    "2",
    "Bazinho Dornelas",
    bazinDornelasFachada,
    "Av Dornelas 562",
    DATABASE
  ),
  new Market(
    "3",
    "Bazinho João XXIII",
    bazinJoaoFachada,
    "Av João XXIII 12",
    DATABASE
  ),
  new Market(
    "4",
    "Bazinho Centro",
    bazinBarraFachada,
    "Av Centro 334",
    DATABASE
  ),
];
