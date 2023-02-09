const mongoose  = require ("mongoose");

const Schema = mongoose.Schema
const menuSchema = new Schema ({
    codigo:{
        type: Number,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        required: true
    }
})


const Menu  = mongoose.model("Menu",menuSchema);

module.exports = Menu;