const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const menuController = require("../controllers.js/menuController");
const validarComida = require('../middlewares/validarComida');

/* GET users listing. */

router.get("/todosjph", menuController.getTodosJPH);

router.get('/', menuController.verComida);

router.get('/:id', menuController.verComidaPorId);

router.post("/comidas",
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El código de la comida es obligatorio")
        .isNumeric()
        .withMessage("El código es solamente numérico"),
    check("tipo")
        .not()
        .isEmpty()
        .withMessage("El tipo de comida es obligatorio"),
    check("nombre")
        .not()
        .isEmpty()
        .withMessage("El nombre de comida es obligatorio"),
    check("precio")
        .not()
        .isEmpty()
        .withMessage("El precio de la comida es obligatorio")
        .isNumeric()
        .withMessage("El precio es numérico y en peso argentino"),
],  validarComida,
menuController.crearComida);

router.put("/actualizar/:id",
[
    check("codigo")
        .not()
        .isEmpty()
        .withMessage("El código de la comida es obligatorio")
        .isNumeric()
        .withMessage("El código es solamente numérico"),
    check("tipo")
        .not()
        .isEmpty()
        .withMessage("El tipo de comida es obligatorio"),
    check("nombre")
        .not()
        .isEmpty()
        .withMessage("El nombre de comida es obligatorio"),
    check("precio")
        .not()
        .isEmpty()
        .withMessage("El precio de la comida es obligatorio")
        .isNumeric()
        .withMessage("El precio es numérico y en peso argentino"),
],  validarComida,
menuController.actualizarComida);

router.delete("/eliminar/:id", menuController.eliminarComida);

module.exports = router;
