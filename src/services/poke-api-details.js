import { convertPokeApiDetailToAboutDetail } from './poke-about-detail.js';
import { environment } from '../../environments/evironments.js';

export class PokemonDetails {

    baseURL = environment.baseURL;

    async getPokemonDetails(pokemonNumber) {
        let pokemonDetailsUrl = this.baseURL + pokemonNumber;
        console.log(pokemonDetailsUrl)
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
