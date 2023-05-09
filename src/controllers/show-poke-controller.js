import { getPokemons } from "../services/poke-api.js";
import { convertPokemonToHtml } from "../view/pokemon-card.js";

export async function loadPokemonItens(offset, limit, baseHtml) {
    await getPokemons(offset, limit).then((pokemonList = []) => {
        baseHtml.innerHTML += pokemonList.map((pokemon)=>{
            return convertPokemonToHtml(pokemon)
        }).join('');
    })
}