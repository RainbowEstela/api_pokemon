const mongoose = require('mongoose');
const app = require("./app");
const port = 3000;
//const urlMongoDb = "mongodb://localhost:27017/pokemondb?authSource=admin";
const urlMongoDb = "mongodb://root:toor@mongodb:27017/pokemondb?authSource=admin";

mongoose.connect(urlMongoDb, );

app.listen(port, () => {
    console.log("esto funca");
})
