const Pokemon = require('../models/pokemon');

function getPokemon(req,res) {
    res.status(200).send({
        msg: "la miqota desde controllers"
    });
}

async function createPokemon(req, res) {
    const pokemon = new Pokemon();
    const params = req.body;

    pokemon.id = 1;
    pokemon.nombre = params.nombre;
    pokemon.especie = params.especie;
    pokemon.preevolucion = params.preevolucion;
    pokemon.evolucion = params.evolucion;
    pokemon.tipo = params.tipo;
    pokemon.imagen = params.imagen;
    pokemon.altura = params.altura;
    pokemon.peso = params.peso;
    pokemon.vida = params.vida;
    pokemon.puntosSaludJuego = params.vida;
    pokemon.habilidades = params.habilidades;

    try {
        const pokemonStore = await pokemon.save();

        if(!pokemonStore) {
            res.status(400).send({msg: "no se guardó el pokemon"});   
        } else {
            res.status(200).send({pokemon: pokemonStore});
        }
        
    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = {
    getPokemon,createPokemon,
}