let pikachu = { data: {
    id: 24,
    name: 'pikachu',
    stats: [{base_stat: 45},{base_stat: 59},{base_stat: 2},{base_stat: 57},{base_stat: 23},{base_stat: 32}],
    height: 45,
    weight: 56,
    sprites: {other: {   'dream_world':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'},
                        'official-artwork':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'},
                        'home':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png'}}},
    types: [{type:{name: 'electric'}}]
}}

let nidoqueen = { data: {
    id: 31,
    name: 'nidoqueen',
    stats: [{base_stat: 44},{base_stat: 88},{base_stat: 32},{base_stat: 89},{base_stat: 23},{base_stat: 99}],
    height: 18,
    weight: 99,
    sprites: {other: {   'dream_world':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg'},
                        'official-artwork':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png'},
                        'home':{front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png'}}},
    types: [{type:{name: 'ground'}},{type:{name: 'poison'}}]
}}

let ninetales = { data: {
    id: 38,
    name: 'ninetales',
    stats: [{base_stat: 66},{base_stat: 77},{base_stat: 88},{base_stat: 99},{base_stat: 64},{base_stat: 22}],
    height: 44,
    weight: 11,
    sprites: {other: {  dream_world: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg'},
                        "official-artwork": {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'},
                        home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png'} 
                    }
            },
    types: [{type:{name: 'fire'}},{type:{name: 'normal'}}]
}}
    


let api = [];

api.push(ninetales)
api.push(nidoqueen)
api.push(pikachu)


module.exports = api;

