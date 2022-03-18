const {Sequelize, DataTypes, Op} = require('sequelize');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./config/db');

app.use('/v1', require('./routes'))

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

try {
	sequelize.authenticate();
	console.log('La conexión fue exitosa');
} 
catch {
	console.error('Hubo un problema con la conexión', error);
}



// Producto.create({ 
// 	id : 101, 
// 	nombre: "Planta",
// 	precio: 230.0,
// 	cat : "Seres vivos",
// 	desc: "Planta de interior, con maceta"
// })
// .then(res => { console.log(res) })

// SELECT * FROM Producto WHERE precio = 300;
// Producto.findAll({
// 	where: {
// 		precio : 300
// 	}
// })
// .then(products =>
// 	console.log("All products:", JSON.stringify(products, null, 2))
// )

// SELECT * FROM Producto WHERE precio >= 300;
// Producto.findAll({
// 	where: {
// 		precio : {
// 			[Op.gte] : 300
// 		}
// 	}
// })
// .then(products =>
// 	console.log("All products:", JSON.stringify(products, null, 2))
// )

// SELECT * FROM Producto WHERE precio >= 350 LIMIT 10;
// Producto.findAll({
// 	where: {
// 		precio : {
// 			[Op.gte] : 350
// 		}
// 	},
// 	limit : 10
// })
// .then(products =>
// 	console.log("All products:", JSON.stringify(products, null, 2))
// )

// SELECT * FROM Producto LIMIT 10 ORDER BY precio;
// Producto.findAll({
// 	limit: 10,
// 	order : [['precio' , 'ASC']]
// })
// .then(products =>
// 	console.log("All products:", JSON.stringify(products, null, 2))
// )

// UPDATE
// Producto.update({ nombre: "Monstera", precio: 345.0 }, {
//   where: {
//     id: 101
//   }
// })
// .then(res => { console.log(res) })

// DELETE
// Producto.destroy({
//   where: {
//     id: 101
//   }
// })
// .then(res => { console.log(res) })




















