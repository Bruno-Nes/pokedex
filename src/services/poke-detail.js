import { Pokemon } from "../model/pokemon-model.js";

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