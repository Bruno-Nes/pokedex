import { Pokemon } from "../model/pokemon-model.js";

// posso colocar aqui talvez um objeto que ira dizer quais infos precisam vir 
// para preencher a tela de "about" específica do pokemon
// por aqui mesmo eu posso ir navegando pelas propriedades assim como ele fez na photo
export function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map(typesSlot => typesSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo= pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}