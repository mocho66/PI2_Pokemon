const axios = require("axios");
const { Type, Pokemon } = require("../db");


const getApiData = async () => {  
    try {
      let pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
      
      let pokeApiUrl = pokeApi.data.results?.map((el) => axios.get(el.url));

      let pokeApiInfo = await axios.all(pokeApiUrl);
      
      let apiData = pokeApiInfo.map((el) => {
        let pokemon = el.data
        let obj = {}
        obj = {
          id: pokemon.id.toString(),
          name: pokemon.name.toLowerCase(),
          life: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          height: pokemon.height,
          weight: pokemon.weight,
          image: pokemon.sprites.front_default,
          types: pokemon.types.map((t) => {
              return { name: t.type.name };
            }),
          creat: false
        }
        return obj;
      })
    
      return apiData;
    
    } catch (e) { console.log(e); }
};

const getDbData = async () => {
    const dbData = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
      },
    });
    return dbData;
};

const allPokemons = async () => {
    const api = await getApiData();
    const db = await getDbData();  
    const all = [api,db].flat();
    return all;
};

const getTypes = async () => {
    try { 
      const api = await getApiData();
      const alltypes = await api.map((a) => a.types);  // mapea y deja arrays de los types
      const flatTypes = alltypes.flat(); // deja un solo array con todos los types (repetidos)
      const typesNames = flatTypes.map((n) => n.name)  
      const typesFinal = [...new Set(typesNames)]; // elimina los repetidos
         
      typesFinal.forEach(async (t) => {
        await Type.findOrCreate({ 
          where: { name: t }, 
        });
      });
      const allTypes = await Type.findAll();
      // console.log(allTypes);
      return allTypes;
    
    } catch (error) {
      console.log(error); 
    }
};

module.exports = {
  getApiData,
  getDbData,
  allPokemons,
  getTypes  
};
