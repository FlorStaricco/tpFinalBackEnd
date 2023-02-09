const { validationResult } = require("express-validator");
const Menu = require("../models/Menu");
const Comida = require("../models/Menu");
const {default: axios} = require("axios");

const getTodosJPH = async (req, res) => {
  try {
    const todosJPH = await axios.get(
      "https://jsonplaceholder.typicode.com/todos");
      res.status(200).json({todos: todosJPH.data, msj: "Ok"});

  } catch (error){
    res.status(500).json({msg: "Error", error: error.message,});
  }
};


const verComida = async (req, res) => {
    const comidas = await Comida.find();
    res.status(200).json({comidas, msg: "Este es el Menú"});
  };

const verComidaPorId = async (req, res) =>{
    const comidas = await Menu.findById(req.params.id);
    res.status(200).json({comidas, msg: "Este es solo un plato del menú"})
};

const crearComida = async (req, res) => {
    try{
        const validationError=validationResult(req)

        if (validationError.isEmpty()){
            const comidas = new Comida(req.body);
            await comidas.save();

        res.status(201).json({
            codigo: comidas.codigo,
            msg: "Comida creada",
            error: null});
          } else {
        res.status(400).json({
            codigo: null,
            msg:"El numero es incorrecto",
            error: validationError,});
          } 
    } catch (error) {
        res.status(500).json({
            codigo: req.body.codigo,
            msg:"Error al crear comida",
            error: error.message,});
    }
};

const actualizarComida = async (req, res) =>{
    try{
        const validationError=validationResult(req)

      
      if(validationError.isEmpty()){
        const comidas = await Menu.findByIdAndUpdate(req.params.id, req.body);
       
        res.status(200)
        .json({
          nombre: req.body.nombre,
          msg: "La comida se actualizó",
          error: null});
      } else {
        res.status(404)
        .json({
          codigo: null,
          msg: "La comida no se actualizó",
          error: validationError});
        }
    } catch (error){
      res
      .status(500)
      .json({
        codigo: req.body.codigo,
        msg: "Error" - " + error.message",
        error: validationError});
      };
    };
 

  const eliminarComida = async (req, res) => {
    try {
      const comida = await Menu.findByIdAndDelete(req.params.id);
  
      if(comida){
        res.status(200).json({
          codigo: req.body.codigo,
          msg: "Se eliminó comida",
        });
      } else {
        res.status(404).json({
          codigo: null,
          msg: "El Id no es correcto"
        });
      }
    } catch (error){
      res
      .status(500)
      .json({
        codigo: req.body.codigo,
        msg: "Error -" + error.message});
    }
  };
    
module.exports = {getTodosJPH, crearComida, verComida, verComidaPorId, actualizarComida, eliminarComida};