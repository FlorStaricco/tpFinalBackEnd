const Menu = require("../models/Menu");

const validarComida = async (req, res, next) => {
    const menu = await Menu.findOne({codigo: req.body.codigo});

    if(menu){
        res.status(400).json({msg: "Comida ingresada al sistema con anterioridad"});

    } else {
        next();
    }
};

module.exports = validarComida;