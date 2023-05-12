import { convertPokeApiDetailToAboutDetail } from './poke-about-detail.js';
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export class PokemonDetails {
    async getPokemonDetails(pokemonNumber) {
        let pokemonDetailsUrl = baseURL + pokemonNumber;
        const response = await fetch(pokemonDetailsUrl);
        const detail = await response.json();
        const eggGroupNamesArray = await this.getEggGroupsNamesFromSpeciesUrl(detail.species.url);
        console.log(pokemonNumber)
        return convertPokeApiDetailToAboutDetail(detail, eggGroupNamesArray);        
    }
    
    async getEggGroupsNamesFromSpeciesUrl(url) {
        const response = await fetch(url);
        const speciesResponse =  await (response.json()); 
        const eggGroupNamesResponse = await speciesResponse.egg_groups;
        return eggGroupNamesResponse.map(gNames => gNames.name);
    }
}
