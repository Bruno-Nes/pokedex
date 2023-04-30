import { convertPokeApiDetailToPokemon } from './poke-detail.js';

export const getPokemonDetail = async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokeDetail = await response.json();
        return convertPokeApiDetailToPokemon(pokeDetail);
}
export const getPokemons = async (offset = 0, limit = 10) => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        return await fetch(url)
            .then(res => res.json())
            .then(json => json.results)
            .then(pokemons => pokemons.map(getPokemonDetail))
            .then(detailRequest => Promise.all(detailRequest))
            .then(pokemonsDetails => pokemonsDetails)
    }
 

