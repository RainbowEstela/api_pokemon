const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AtaqueSchema = Schema({
    nombre: {
        type: String,
        require: true
    },

    damage: {
        type: Number,
        require: true
    }
})

const PokemonSchema = Schema ({
    id: {
        type: Number,
        require: true
    },

    nombre: {
        type: String,
        require: true
    },

    especie: {
        type: String,
        require: true,
    },

    preevolucion: {
        type: String,
        require: false,
    },

    evolucion: {
        type: String,
        require: false,
    },

    tipo: [String],

    imagen: {
        type: String,
        require: true
    },

    altura: {
        type: Number,
        require: true
    },

    peso: {
        type: Number,
        require: true
    },

    vida: {
        type: Number,
        require: true
    },

    puntosSaludJuego: {
        type: Number,
        require: true,
    },

    habilidades: [AtaqueSchema],

    fueraDeCombate: {
        type: Boolean,
        require: true,
        default: false
    }

})

module.exports = mongoose.model("Pokemon", PokemonSchema);