const express = require("express");
const app = express();

// cargar rutas
const pokemon_routes = require("./routes/pokemon");

// rutas base
app.use("/api" , pokemon_routes);

module.exports = app;