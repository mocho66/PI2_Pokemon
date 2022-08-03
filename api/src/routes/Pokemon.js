const express = require('express');
const router = express.Router();
const { Pokemon, Type } = require('../db.js');
const {allPokemons} = require('./GetFunctions.js');

// GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

//  GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

router.get('/',async (req, res) => { 
    try {
      const { name } = req.query;
  
      const pokemons = await allPokemons();
      
      if (name) {

        const pokemonsFilterByName = pokemons.filter((r) =>
          r.name.toLowerCase() === name.toLowerCase());

        pokemonsFilterByName.length   ? res.send(pokemonsFilterByName) 
                                      : res.status(404).send({ 
                    msg: "We not found any pokemon with that name, please try another one." });
      
      } else { return res.send(pokemons); }

    } catch (e) { console.log(e); }
});

//  GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon 
// existente en pokeapi o uno creado por ustedes

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const pokemons = await allPokemons();
      
      if (id) {
      
        const pokemonsById = pokemons.filter((p) => parseInt(p.id) === parseInt(id));
        
        pokemonsById.length   ? res.send(pokemonsById)
                              : res.send({ msg: "Error does not exist, should enter a valid ID" });

      } else {
        res.send({ msg: "Should enter a valid ID" });
      }
    } catch (error) { 
      res.status(404).send({ msg: "Should enter a valid ID" });
    }
  });


//  POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta 
// de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.

router.post('/', async (req, res) => {
  const {name, life, attack, defense, speed, height, weight, types, image} = req.body;
  try {

    // corroboramos que esten todos los datos
    if (!name || !life || !attack || !defense || !speed || !height || !weight) {
      return res.status(400).json({
          info: `There is a missing value`
      })
    }
    
    // corroboramos que no se cargo antes un pokemon con el mismo nombre
    const exists = await Pokemon.findOne({ where: { name: req.body.name } })
    if (exists) return res.json({ info: "This pokemons already exists!" });

    // transformamos el arreglo de los tipos y corroboramos que al menos se cargo un tipo
    let arrType = []
    types?.map(e => arrType.push({ name: e }))
    if (!arrType.length) { return res.status(400).json({ info: `Choose at least one type` }) }

    // cargamos en nuevo pokemon a la BD
    const newPokemon = await Pokemon.create({
      "name": name.toLowerCase(), 
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    });

    // cargamos los types para el nuevo pokemon relacionando las tablas
    for (i=0; i<arrType.length; i++) {
      let typeDb = await Type.findAll({ where: { name: arrType[i].name } })
      newPokemon.addType(typeDb);
    }
    
    return res.status(200).send({ msg: "Pokemon created successfully!!" });
  
  } catch (e) { console.log(e); }
});

module.exports = router;




