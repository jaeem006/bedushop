const router = require('express').Router();

router.get('/', (req,res) => {
	res.send("Bienvenido a nuestra API")
});

router.use('/productos', require('./productos'))

module.exports = router;