const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../services/jwt");

async function register(req,res) {
    const user = new User(req.body);
    const {email, password} = req.body;
    
    try {
        if(!email) throw { msg: "El email es obligatorio"};
        if(!password) throw {msg: "La contraseña es obligatoria"};

        // Revisamos si el email esta en uso
        const foundEmail = await User.findOne( {email});
        if(foundEmail) throw {msg: "El email está en uso"};

        const salt = bcryptjs.genSaltSync(10);
        user.password = await bcryptjs.hash(password, salt);

        user.save();

        res.status(200).send({token: jwt.createToken(user, "24h")});

    } catch (error) {
        res.status(500).send(error);
    }
}

async function login(req, res) {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email});
        if(!user) throw {msg: "Error en email y/o contraseña"};

        const passwordSuccess = await bcryptjs.compare(password, user.password);
        if(!passwordSuccess) throw {msg: "Error en email y/o contraseña"}

        res.status(200).send({token: jwt.createToken(user, "24h")})

    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = {
    register,login,
}