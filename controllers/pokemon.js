const Pokemon = require('../models/pokemon');

/**
 * devuelve todos los pokemons de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
async function getPokemon(req,res) {
    try {
        const pokemons = await Pokemon.find().sort({nombre: 1});

        if(!pokemons) {
            res.status(400).send({msg: "error recuperando pokemons"});
        } else {
            res.status(200).send(pokemons);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

/**
 * devuelve el pokemon que coincida por id
 * @param {*} req 
 * @param {*} res 
 */
async function getPokemonById(req,res) {
    try {
        const id = req.params.id;

        const pokemon = await Pokemon.findById(id);
    
        if(!pokemon) {
            res.status(400).send({msg: "error al recuperar pokemon"});
        } else {
            res.status(200).send(pokemon);
        }
    } catch (error) {
        res.status(500).send(error);
    }
   
}

/**
 * devuelve todos los pokemon que contengan el nombre
 * @param {*} req 
 * @param {*} res 
 */
async function getPokemonByName(req,res) {
    try {
        const name = req.params.name;

        const pokemon = await Pokemon.find({nombre: { "$regex": name, "$options": "i" }});

        if(!pokemon) {
            res.status(400).send({msg: "error al recuperar pokemon"});
        } else {
            res.status(200).send(pokemon);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

/**
 * crea un pokemon con los parametros pasados
 * @param {*} req 
 * @param {*} res 
 */
async function createPokemon(req, res) {
    const pokemon = new Pokemon();
    const params = req.body;

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
            res.status(201).send({pokemon: pokemonStore});
        }
        
    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = {
    getPokemon,createPokemon,getPokemonById,getPokemonByName,
}