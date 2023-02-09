const mongoose = require ("mongoose");
require('dotenv').config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log ("base de datos conectada");
    } catch (error) {
        console.log(error.message, "base de datos desconectada");
    }
};

module.exports = connect;