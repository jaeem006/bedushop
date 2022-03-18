const { Sequelize, DataTypes, Op } = require('sequelize');
const Producto = require('../models/Producto')

function crearProducto(req, res) {
   var body = req.body;
   Producto.create(body)
   .then(producto => 
      res.status(201).send(producto)
   )
   .catch(error => 
      res.status(500).send(error)
    )
}

function obtenerProductos(req, res) {
  Producto.findAll()
  .then(products =>
    res.status(201).send(products)
  )
}

function obtenerProductosPorCat(req, res) {
  var cat = req.params.cat
  Producto.findAll({
      where: { cat : cat}
    })
  .then(products =>
    res.status(201).send(products)
  )
}

function modificarProducto(req, res) {
   var body = req.body;
   var id = req.params.id;
   Producto.update( body , {
     where: {
       id: id
     }
   })
   .then(producto =>
      res.status(201).send(producto)
   )
}

function eliminarProducto(req, res) {
   var id = req.params.id;
   Producto.destroy({
     where: {
       id: id
     }
   })
   .then(r =>
      res.status(201).send("Se elimino el producto", id)
   )
}

// exportamos las funciones definidas
module.exports = {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
}