const axios = require("axios");
const { Diet, Recipe } = require("../db");
const YOUR_API_KEY="30b2e0c6d4074424a15b88d16d90adc4";

const getApiData = async () => {  
    try {
        const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
  
        const apiData = apiUrl.data.results.map((recipes) => { 
            return {   
            id: recipes.id.toString(),
            image: recipes.image,
            name: recipes.title.toLowerCase(), 
            type: recipes.diets,
            summary: recipes.summary,
            score: recipes.spoonacularScore,
            healthyScore: recipes.healthScore,
            dishTypes: recipes.dishTypes,
            steps: recipes.analyzedInstructions[0]?.steps.map((s) => {
                return {
                number: s.number, 
                step: s.step,
                };
            }),
        }});

        return apiData;
    
    } catch (e) { console.log(e); }
};

const getDbData = async () => {
    const dbData = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
      },
    });
    return dbData;
};

const allRecipes = async () => {
    const api = await getApiData();
    const db = await getDbData();  
    const all = [api,db].flat();
    return all;
};

const getDiets = async () => {
    try { 
      const dietas = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY
      }&addRecipeInformation=true&number=100`
      );
      const types = await dietas.data.results.map((t) => t.diets);  // mapea y deja arrays de las dietas
      const diets = types.flat(); // deja un solo array con todas las dietas (repetidas)
      const typeDiets = [...new Set(diets),"vegetarian"]; // elimina las repetidas y suma "vegetarian"
      typeDiets.forEach(async (d) => {
        await Diet.findOrCreate({ 
          where: { name: d }, 
        });
      });
      const allDiets = await Diet.findAll();
      return allDiets;
    } catch (error) {
      console.log(error); 
    }
};

module.exports = {
  getApiData,
  getDbData,
  allRecipes,
  getDiets  
};
