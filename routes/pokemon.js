const express = require("express");
const PokemonController = require("../controllers/pokemon");

const api = express.Router();

//peticiones por get
api.get("/pokemon", PokemonController.getPokemon);
api.get("/pokemon/:id",PokemonController.getPokemonById);
api.get("/pokemon/buscar/:name", PokemonController.getPokemonByName);
api.get("/pokemon/tipo/:type", PokemonController.getPokemonGroupByType);

//peticiones por post
api.post("/pokemon", PokemonController.createPokemon);

//peticiones por delete
api.delete("/pokemon/:id", PokemonController.deletePokemon);

//peticiones por put
api.put("/pokemon/:id/ataque/:damage", PokemonController.attackPokemon);
api.put("/pokemon/curar/:id", PokemonController.restorePokemon);

module.exports = api;