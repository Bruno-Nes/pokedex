import { buildLi } from '../view/pokemon-card.js';

export function start(offset, limit, pokemonsList) {
    buildLi(offset, limit, pokemonsList).then((res) => {
        res.forEach(e => {
            e.addEventListener('click', (e) => {
                alert("hello");
            })
        })
    });
}
