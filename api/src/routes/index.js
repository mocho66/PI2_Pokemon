const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemon = require("./Pokemon.js")
const Types = require("./Types.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', Pokemon);
router.use('/types', Types);


module.exports = router;
