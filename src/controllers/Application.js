import { buildLi } from '../view/pokemon-card.js';
import { buildDetailCard, hideDetailCard, showDetailCard } from '../controllers/poke-detail-controller.js';
// import { loadPokemonItens } from './show-poke-controller.js';

export class ControlApp {
   buildPokemons(offset, limit, pokemonsList, htmlElement) {
        buildLi(offset, limit, pokemonsList).then((res) => {
            res.forEach((e, index) => {
                e.addEventListener('click', (e) => {
                    buildDetailCard(htmlElement[1], htmlElement[0], index+1);
                })
            })
        });
        hideDetailCard(htmlElement[1]);
    }
}
 