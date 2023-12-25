const express = require("express");
const PokemonController = require("../controllers/pokemon");

const api = express.Router();

api.get("/pokemon", PokemonController.getPokemon);

module.exports = api;