const express = require("express");
const PokemonController = require("../controllers/pokemon");

const api = express.Router();

api.get("/pokemon", PokemonController.getPokemon);
api.post("/pokemon", PokemonController.createPokemon);

module.exports = api;