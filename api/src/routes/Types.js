const express = require('express');
const router = express.Router();

// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

router.get('/', async (req, res) => {
    try {
      const d = await Diet.findAll();
      res.send(d);
    } catch (e) {
      res.status(404).send({msg:"error"})
    }
});


module.exports = router;