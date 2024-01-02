const express = require("express");
const PokemonController = require("../controllers/pokemon");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

//peticiones por get
api.get("/pokemon", [md_auth.ensureAuth],PokemonController.getPokemon);
api.get("/pokemon/:id", [md_auth.ensureAuth],PokemonController.getPokemonById);
api.get("/pokemon/buscar/:name",  [md_auth.ensureAuth],PokemonController.getPokemonByName);
api.get("/pokemon/tipo/:type",  [md_auth.ensureAuth],PokemonController.getPokemonGroupByType);

//peticiones por post
api.post("/pokemon",  [md_auth.ensureAuth],PokemonController.createPokemon);

//peticiones por delete
api.delete("/pokemon/:id",  [md_auth.ensureAuth],PokemonController.deletePokemon);

//peticiones por put
api.put("/pokemon/:id/ataque/:damage",  [md_auth.ensureAuth],PokemonController.attackPokemon);
api.put("/pokemon/curar/:id",  [md_auth.ensureAuth],PokemonController.restorePokemon);

module.exports = api;