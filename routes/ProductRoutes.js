const express = require('express');
const router = express.Router();
const Product = require('../models/Producto');

//crear producto
router.post('/', async (req, res) => {

    try{
        const prod = await new Product({
            nombre:             req.body.nombre,
            precio:             req.body.precio,
            categoria_id:       req.body.categoria_id,
            stock:              req.body.stock,
            caracteristicas:    req.body.caracteristicas
        }).save();
        res.status(201).json(prod);
    }catch (e) {
        res.status(400).json({ error: "Error no se pudo registrar" + e.message});
    }

})

module.exports = router;