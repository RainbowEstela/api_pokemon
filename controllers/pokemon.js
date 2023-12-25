function getPokemon(req,res) {
    res.status(200).send({
        msg: "la miqota desde controllers"
    })
}

module.exports = {
    getPokemon,
}