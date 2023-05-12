import { closeView, showPokemonsDetailOnClick } from '../view/pokemon-card-detail.js';
import { PokemonDetails } from '../services/poke-api-details.js';

const pokemonDetails = new PokemonDetails();

// vai receber o método que faz a query nos datalhes do pokemon
export function buildDetailCard(htmlElement) {
    htmlElement.innerHTML = showPokemonsDetailOnClick();
}

export function showDetailCard(cardWrapper, pokemonNumber) {
    cardWrapper.style.display = "flex"; 
    pokemonDetails.getPokemonDetails(pokemonNumber);
}

export function hideDetailCard(cardWrapper) {
    closeView(cardWrapper);
}
