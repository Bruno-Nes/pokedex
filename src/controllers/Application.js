import { buildLi } from '../view/pokemon-card.js';
import { buildDetailCard, hideDetailCard, showDetailCard } from '../controllers/poke-detail-controller.js';

export class ControlApp {
   buildPokemons(offset, limit, pokemonsList, htmlElement) {
        buildDetailCard(htmlElement[0]);
        buildLi(offset, limit, pokemonsList).then((res) => {
            res.forEach((e, index) => {
                e.addEventListener('click', (e) => {
                    showDetailCard(htmlElement[1], index+1);
                })
            })
        });
        hideDetailCard(htmlElement[1]);
    }
}
 