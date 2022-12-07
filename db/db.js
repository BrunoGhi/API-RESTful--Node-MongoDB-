const mongoose = require("mongoose");
require("dotenv").config()

const conect = async () => {
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("Base de datos conectada");
    } catch {
        console.log("No se ha podido conectar a la database");
    }
}

module.exports = {conect}