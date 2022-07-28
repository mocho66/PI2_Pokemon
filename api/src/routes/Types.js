const express = require('express');
const router = express.Router();
const { Pokemon, Type } = require('../db.js');

//  GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y 
// guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/', async (req, res) => {
    try {
      const t = await Type.findAll();
      res.send(t);
    } catch (e) {
      res.status(404).send({msg:"error"})
    }
});


module.exports = router;