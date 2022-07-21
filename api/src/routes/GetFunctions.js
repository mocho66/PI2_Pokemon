const axios = require("axios");
const { Diet, Recipe } = require("../db");


const getApiData = async () => {  
    try {
        const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40`);
        const apiData = apiUrl.data.results.map((web) => { 
            let pokemon = await axios.get(web.url); 
            return {   
            id: pokemon.id.toString(),
            name: pokemon.title.toLowerCase(),
            life: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprite.front_default,
            types: pokemon.types.map((t) => {
              return { name: t.type.name };
            }),
            creat: false
        }});

        return apiData;
    
    } catch (e) { console.log(e); }
};

const getDbData = async () => {
    const dbData = await Pokemon.findAll({
      include: {
        model: Pokemon,
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
      const api = await getApiData();
      const alltypes = await api.map((a) => a.types);  // mapea y deja arrays de los typos
      const flatTypes = alltypes.flat(); // deja un solo array con todos los tipos (repetidas)
      const typesFinal = [...new Set(flatTypes)]; // elimina las repetidas y suma "vegetarian"
      typesFinal.forEach(async (t) => {
        await Types.findOrCreate({ 
          where: { name: t }, 
        });
      });
      const allTypes = await Types.findAll();
      return allTypes;
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
