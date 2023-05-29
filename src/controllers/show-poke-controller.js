import { getPokemons } from "../services/poke-api.js";
import { convertPokemonToHtml } from "../view/pokemon-card.js";

// export async function loadPokemonItens(baseHtml) {
//     baseHtml.innerHTML += 
//         return convertPokemonToHtml(pokemon)
//   .join('');
// }

export async function loadPokemon(offset, limit) {
    await getPokemons(offset, limit).then((pokemonList = []) => {
        pokemonList.map((pokemon)=>{ return pokemon })
    })
}
