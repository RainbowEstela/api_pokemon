const express = require("express");
const PokemonController = require("../controllers/pokemon");

const api = express.Router();

//peticiones por get
api.get("/pokemon", PokemonController.getPokemon);
api.get("/pokemon/:id",PokemonController.getPokemonById);
api.get("/pokemon/buscar/:name", PokemonController.getPokemonByName)

//peticiones por post
api.post("/pokemon", PokemonController.createPokemon);


module.exports = api;