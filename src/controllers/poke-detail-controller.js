import { showPokemonsDetailOnClick } from '../view/pokemon-card-detail';
// vai receber o método que faz a query nos datalhes do pokemon
export function buildDetailCard(htmlElement) {
    htmlElement.innerHtml = showPokemonsDetailOnClick();
}

export function hideDetailCard() {

}