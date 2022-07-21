const express = require('express');
const router = express.Router();
const { Recipe, Diet } = require('../db.js');
const {allRecipes} = require('./GetFunctions.js');


// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

router.get('/',async (req, res) => { 
    try {
      const { name } = req.query;
  
      const recipe = await allRecipes();
      
      if (name) {

        const recipesFilterByName = recipe.filter((r) =>
          r.name.toLowerCase().includes(name.toLowerCase()));

        fil.length  ? res.send(recipesFilterByName) 
                    : res.status(404).send({ 
                        msg: "We not found any recipe with that name, please try another one" });
      
      } else { return res.send(recipe); }

    } catch (e) { console.log(e); }
});

// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const recetas = await allRecipes();
      
      if (id) {
        // console.log(recetas)
        const recipeById = recetas.filter((r) => parseInt(r.id) === parseInt(id));
        
        recipeById.length   ? res.send(recipeById)
                            : res.send({ msg: "Error does not exist, should enter a valid ID" });

      } else {
        res.send({ msg: "Should enter a valid ID" });
      }
    } catch (error) { 
      res.status(404).send({ msg: "Should enter a valid ID" });
    }
  });


// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

router.post('/create', async (req, res) => {
  const { name, summary, score, healthyScore, steps, type, image, dishTypes } = req.body;
  try {
    const nuevaReceta = await Recipe.create({
      name,
      summary,
      score,
      healthyScore,
      steps,
      image,
      dishTypes, 
      type
    });
        
    const dietas = await Diet.findAll({
      where: { name: type },
    });

    await nuevaReceta.addDiet(dietas); 
  
    return res.status(200).send({ msg: "Recipe created successfully" });
  
  } catch (e) { console.log(e); }
});

module.exports = router;

// GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

//  GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

//  GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

//  POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.

//  GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí